from fastapi import Depends, HTTPException, status
from typing import List 
from sqlmodel import Session, select
from models.products import Product
from auth.deps import get_current_user
from fastapi import APIRouter

router =APIRouter(prefix="/products", tags=["products"])

router.get("/", response_model=List[Product])
def list_products(db: Session = Depends(), current_user=Depends(get_current_user)):
    products = db.exec(select(Product)).all()
    return products

def get_product(product_id: int, db: Session):
    product = db.exec(select(Product).where(Product.id == product_id)).first()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product

def update_product_stock(product_id: int, quantity: int, db: Session):
    product = get_product(product_id, db)
    if product.stock < quantity:
        raise HTTPException(status_code=400, detail="Insufficient stock")
    product.stock -= quantity
    db.add(product)
    db.commit()
    db.refresh(product)
    return product

def add_product(name: str, sku: str, price: float, stock: int, category: str, db: Session):
    existing_product = db.exec(select(Product).where(Product.sku == sku)).first()
    if existing_product:
        raise HTTPException(status_code=400, detail="SKU already exists")
    new_product = Product(name=name, sku=sku, price=price, stock=stock, category=category)
    db.add(new_product)
    db.commit()
    db.refresh(new_product)
    return new_product



