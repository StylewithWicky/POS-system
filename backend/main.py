from fastapi import FastAPI
from routes import sales,products,user
from clam.db import create_db_and_tables
from models.sale import Sale
from models.products import Product
from models.salesitem import Saleitem
from models.user import User


        
models=[Sale,Product,Saleitem,User]
for models in models:
        try:
         models.model_rebuild()
        except Exception as e :
             pass
             
app = FastAPI(title="FARM POS System")



@app.on_event("startup")
def on_startup():
          create_db_and_tables()

app.include_router(products.router)
app.include_router(sales.router)
app.include_router(user.router)

@app.get("/")
def health_check():
    return {"status": "POS Backend Running"}