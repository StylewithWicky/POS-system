from pydantic import BaseModel, Field,ConfigDict
from typing import Optional
from models.salesitem import Saleitem

class SaleItemSchema(BaseModel):
    unit_price:float
    quantity:int
    subtotal:float
    price:float
    sale_id: int 
    
    model_config=ConfigDict(from_attributes=True)
class SalesCreate(SaleItemSchema):
    pass

class SalesUpdate(SaleItemSchema):
    unit_price:Optional[float]
    quantity:Optional[int]
    subtotal:Optional[float]
    price:Optional[float]
    sale_id:Optional[int]
class Config:
        from_attributes = True