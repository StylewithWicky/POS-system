from sqlmodel import SQLModel, Field, Relationship
from datetime import datetime
from typing import Optional,List
from .user import User
from .salesitem import Saleitem

class Sale(SQLModel, table=True):
    id:int = Field(default=None, primary_key=True)
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    total_amount: float
    user_id: int =Field(foreign_key="user.id")
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
    ip_address: str = Field(nullable=True)
    is_void: bool = Field(default=False)
    
    user:User = Relationship("User", back_populates="sales")
    items: List["SaleItem"] = Relationship("SaleItem", back_populates="sale")