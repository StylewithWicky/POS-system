from sqlmodel import SQLModel, Field, Relationship
from typing import List, Optional
from datetime import datetime
from .sale import Sale
from .products import Product


class Saleitem(SQLModel, table=True):
    id: int = Field(default=None, primary_key=True)
    sale_id: int = Field(foreign_key="sale.id")
    product_id: int = Field(foreign_key="product.id")
    unit_price_at_sale: float
    subtotal: float
    quantity: int
    price: float
    
    sale: "Sale" = Relationship("Sale", back_populates="items")
    product: "Product" = Relationship("Product", back_populates="sales")