from pydantic import BaseModel, ConfigDict
from typing import Optional

class SaleBase(BaseModel):
    timestamp: str
    total_amount: float
    created_at: str
    updated_at: str
    ip_adress: str
    is_void: bool
    user_id: int 
    
    model_config = ConfigDict(from_attributes=True)
    
class SaleCreate(SaleBase):
    pass

class SaleSchema(SaleBase):
    id: int
