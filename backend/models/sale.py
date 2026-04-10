from sqlmodel import SQLModel, Field, Relationship
from datetime import datetime
from typing import Optional,List
from .user import User

class Sale(SQLModel, table=True):
    id:int = Field(default=None, primary_key=True)
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    total_amount: float
    user_id: int =Field(foreign_key="user.id")
    
    user:User = Relationship("User", back_populates="sales")
    items: List["SaleItem"] = Relationship("SaleItem", back_populates="sale")