import os
from sqlmodel import SQLModel, create_engine, Session, select
from models.user import User
from models.products import Product
from auth.thents import hash_password
from dotenv import load_dotenv, find_dotenv
from models.salesitem import Saleitem
from models.sale import Sale


load_dotenv(find_dotenv())


URL=os.getenv("DATABASE_URL")

engine = create_engine(URL, echo=True)

def create_db_and_tables():
    
    SQLModel.metadata.create_all(engine)
    seed_initial_data()

def seed_initial_data():
    
    with Session(engine) as session:
        Admin_email = os.getenv("email")
        Admin_hashed_password = os.getenv("hashed_password")
        Admin_full_name = os.getenv("full_name")
        Admin_role = os.getenv("role")
        
        admin_user = session.exec(select(User).where(User.email == Admin_email)).first()
        if not admin_user:
            new_admin = User( 
                
            email=Admin_email,
            hashed_password=Admin_hashed_password,
            full_name=Admin_full_name,
            role=Admin_role
            
            )
            session.add(new_admin)
            
            
       
        test_prod = session.exec(select(Product).where(Product.sku == "TEST-001")).first()
        if not test_prod:
            product = Product(
                sku="TEST-001",
                name="Test Item",
                price=10.50,
                stock_quantity=50,
                category="General"
            )
            session.add(product)
            
        session.commit()

def get_session():
    """Dependency for FastAPI routes to handle DB sessions per request."""
    with Session(engine) as session:
        yield session