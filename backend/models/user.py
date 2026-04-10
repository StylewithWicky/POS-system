from sqlmodel import SQLModel, Field, Relationship
from datetime import Base
from datetime import datetime

class User(SQLModel, table=True):
    id: int = Field(default=None, primary_key=True)
    email: str = Field(unique=True)
    hashed_password: str
    role: str = Field(default="cashier")
    sales: list["Sale"] = Relationship("Sale", back_populates="user")
    