from pydantic import BaseModel, ConfigDict
from typing import Optional 

class ProductBase(BaseModel):
    name: str
    sku: str 
    price: float
    stock: int
    category: Optional[str]
    
    model_config = ConfigDict(from_attributes=True)
    
class ProductCreate(ProductBase):
    pass

class ProductSchema(ProductBase):
    
    id: int
    
class ProductUpdate(ProductBase):
    name: Optional[str]
    sku: Optional[str] 
    price: Optional[float]
    stock: Optional[int]
    category: Optional[str]