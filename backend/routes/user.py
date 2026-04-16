from fastapi import APIRouter, Depends, HTTPException, status
from sqlmodel import Session, select
from typing import List
from clam.db import get_session  # Adjust this import to your db file
from models.user import User as UserModel  # The SQLModel table
from schemas.user import UserSchema, UserCreate, UserUpdate  # The Pydantic schemas

router = APIRouter(prefix="/users", tags=["Users"])

@router.post("/", response_model=UserSchema, status_code=status.HTTP_201_CREATED)
def create_user(user_data: UserCreate, session: Session = Depends(get_session)):
    # Check if email exists
    existing_user = session.exec(select(UserModel).where(UserModel.email == user_data.email)).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    # Create the DB object (UserModel) from schema data
    # Note: In a real app, you would hash the password here
    db_user = UserModel(
        name=user_data.name,
        email=user_data.email,
        hashed_password=user_data.password, # Plain text for now as per your schema
        role=user_data.role
    )
    
    session.add(db_user)
    session.commit()
    session.refresh(db_user)
    return db_user

@router.get("/", response_model=List[UserSchema])
def read_users(session: Session = Depends(get_session)):
    users = session.exec(select(UserModel)).all()
    return users

@router.get("/{user_id}", response_model=UserSchema)
def read_user(user_id: int, session: Session = Depends(get_session)):
    user = session.get(UserModel, user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@router.patch("/{user_id}", response_model=UserSchema)
def update_user(user_id: int, user_update: UserUpdate, session: Session = Depends(get_session)):
    db_user = session.get(UserModel, user_id)
    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")
    
    # Convert schema to dict and exclude unset values
    update_data = user_update.model_dump(exclude_unset=True)
    
    for key, value in update_data.items():
        # If updating password, map it to hashed_password field in DB
        if key == "password":
            setattr(db_user, "hashed_password", value)
        else:
            setattr(db_user, key, value)
            
    session.add(db_user)
    session.commit()
    session.refresh(db_user)
    return db_user

@router.delete("/{user_id}")
def delete_user(user_id: int, session: Session = Depends(get_session)):
    user = session.get(UserModel, user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    session.delete(user)
    session.commit()
    return {"ok": True}