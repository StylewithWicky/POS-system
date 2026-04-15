from pydantic import BaseModel
from typing import Optional 

class User(BaseModel):
    email:str 
    password:str
    name:str
    role:Optional[str] = "cashier"
    
class UserCreate(User):
    pass

class UserUpdate(User):
    email:Optional[str]
    password:Optional[str]
    name:Optional[str]
    role:Optional[str]