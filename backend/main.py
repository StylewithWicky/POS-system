from fastapi import FastAPI
from routes import sales
from routes import products
from clam.db import create_db_and_tables
from routes.products import get_product, update_product_stock, add_product
from models.sale import Sale
from routes.sales import Sale
from routes.products import Product

app = FastAPI(title="FARM POS System")

@app.on_event("startup")
def on_startup():
    create_db_and_tables()

app.include_router(products.router)
app.include_router(sales.router)

@app.get("/")
def health_check():
    return {"status": "POS Backend Running"}