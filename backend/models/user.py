from sqlmodel import SQLModel, Field, Relationship
from datetime import datetime
from typing import TYPE_CHECKING, Optional, List
if TYPE_CHECKING:
    from .sale import Sale


class User(SQLModel, table=True):
    id: int = Field(default=None, primary_key=True)
    email: str = Field(unique=True)
    hashed_password: str
    role: str = Field(default="cashier")
    sales: list["Sale"] = Relationship( back_populates="user")
    