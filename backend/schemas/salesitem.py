from pydantic import BaseModel, Field
from typing import Optional
from models.sale import Sale 

class Sale(BaseModel):
    unit_price:float
    quantity:int
    subtotal:float
    price:float
    sale_id: int = Field(foreign_key="sale.id")
    
class SalesCreate(Sale):
    pass

class SalesUpdate(Sale):
    unit_price:Optional[float]
    quantity:Optional[float]
    subtotal:Optional[float]
    price:Optional[float]
    sale_id:Optional[float]