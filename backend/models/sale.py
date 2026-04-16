from sqlmodel import SQLModel, Field, Relationship
from datetime import datetime
from typing import Optional,List, TYPE_CHECKING

if TYPE_CHECKING:  
    from .user import User
    from models.salesitem import Saleitem

class Sale(SQLModel, table=True):
    id:int = Field(default=None, primary_key=True)
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    total_amount: float
    user_id: int =Field(foreign_key="user.id")
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
    ip_address: str = Field(nullable=True)
    is_void: bool = Field(default=False)
    model_config = {
        "arbitrary_types_allowed": True,
    }
    #user:User = Relationship( back_populates="sales")
    #saleitems: List["Saleitem"] = Relationship( back_populates="sale")
    

