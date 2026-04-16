from sqlmodel import SQLModel, Field, Relationship
from typing import List, Optional
from datetime import datetime
from .sale import Sale

class Product(SQLModel, table=True):
    id: int = Field(default=None, primary_key=True)
    name: str = Field(index=True)
    sku: str = Field(unique=True, index=True)
    price: float
    stock: int = Field(default=0)
    category: Optional[str] = Field(default=None, index=True)
    model_config = {
        "arbitrary_types_allowed": True,
    }
    #sale_entries: List["Saleitem"] = Relationship( back_populates="product")
