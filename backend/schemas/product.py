from pydantic import BaseModel,Field
from typing import Optional 

class Product(BaseModel):
    name:str
    sku:str 
    price:float
    stock:int
    category:Optional[str]
    
class ProductCreate(Product):
    pass

class ProductUpdate(Product):
    name:Optional[str] 
    sku:Optional[str]
    price:Optional[float]
    stock:Optional[int]
    category:Optional[str]
    
