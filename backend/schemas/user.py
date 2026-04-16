from pydantic import BaseModel, ConfigDict
from typing import Optional 

class UserBase(BaseModel): # Rename from User to UserBase
    email: str 
    name: str
    role: Optional[str] = "cashier"
    
    model_config = ConfigDict(from_attributes=True)
    
class UserCreate(UserBase):
    password: str # Only include password in Create, not in the Base/Response

class UserSchema(UserBase):
    id: int
    
class UserUpdate(UserBase):
    email: Optional[str] 
    name: Optional[str]
    role: Optional[str] = "cashier"