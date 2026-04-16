from fastapi import Depends, HTTPException, status
from typing import List
from sqlmodel import Session, select
from models.sale import Sale
from models.user import User
from models.salesitem import Saleitem
from auth.deps import get_current_user
from fastapi import APIRouter
from models.sale import Sale
from models.products import Product
from routes.products import get_product, update_product_stock, add_product  



router = APIRouter(prefix="/sales", tags=["sales"])

@router.get("/checkout", response_model=List[Sale])
def list_sales(db: Session = Depends(), current_user=Depends(get_current_user)):
    
    total=0
    sale_entries = db.exec(select(Sale)).all()
    
    for item in sale_entries:
        products = db.exec(select(Saleitem).where(Saleitem.sale_id == 'sale.id')).all()
        
        if not products or products.quantity < item.quantity:
            raise HTTPException(status_code=400, detail="Insufficient stock for product")
        
        subtotal = item.unit_price_at_sale * item.quantity
        total += subtotal
        sales_item = Saleitem(sale_id=item.id, product_id=item.product_id, unit_price_at_sale=item.unit_price_at_sale, subtotal=subtotal, quantity=item.quantity, price=item.price)
        sale_entries.append(sales_item)
        
        
        products.quantity -= item.quantity
        db.add(sales_item)
        
        new_sale = Sale(total_amount=total, user_id='user.id', items=sale_entries)
        db.add(new_sale)
        db.commit()
        db.refresh(new_sale)
        
    
    return sale_entries



