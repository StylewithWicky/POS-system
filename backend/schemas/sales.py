from pydantic import BaseModel ,Field
from typing import Optional

class Sale(BaseModel):
    timestamp:str
    total_amount:float
    created_at:str
    updated_at:str
    ip_adress:str
    is_void:bool
    user_id:int = Field(foreign_key="user.id")
    
class SaleCreate(Sale):
    pass

class SaleUpdate(Sale):
    timestamp:Optional[str]
    total_amount:Optional[float]
    created_at:Optional[str]
    updated_at:Optional[str]
    ip_adress:Optional[str]
    is_void:Optional[bool]
    user_id:Optional[int]