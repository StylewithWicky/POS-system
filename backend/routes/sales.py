from fastapi import APIRouter, Depends, HTTPException, status
from sqlmodel import Session, select
from typing import List
from clam.db import get_session
from models.sale import Sale as SaleModel
from models.salesitem import Saleitem as SaleItemModel
from schemas.sales import SaleSchema, SaleCreate # Assuming these exist

router = APIRouter(prefix="/sales", tags=["Sales"])

@router.post("/", response_model=SaleSchema, status_code=status.HTTP_201_CREATED)
def create_sale(sale_data: SaleCreate, session: Session = Depends(get_session)):
    # 1. Create the main Sale record
    db_sale = SaleModel(
        total_amount=sale_data.total_amount,
        user_id=sale_data.user_id,
        ip_adress=sale_data.ip_adress,
        is_void=False,
        timestamp=sale_data.timestamp,
        created_at=sale_data.created_at,
        updated_at=sale_data.updated_at
    )
    session.add(db_sale)
    session.commit()
    session.refresh(db_sale)
    
    # Note: If your SaleCreate includes items, you would loop through 
    # and add SaleItemModels here referencing db_sale.id
    
    return db_sale

@router.get("/", response_model=List[SaleSchema])
def read_sales(session: Session = Depends(get_session)):
    return session.exec(select(SaleModel)).all()

@router.get("/{sale_id}", response_model=SaleSchema)
def read_sale(sale_id: int, session: Session = Depends(get_session)):
    sale = session.get(SaleModel, sale_id)
    if not sale:
        raise HTTPException(status_code=404, detail="Sale not found")
    return sale