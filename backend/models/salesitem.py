from sqlmodel import SQLModel, Field, Relationship
from typing import List, Optional,TYPE_CHECKING
from datetime import datetime
if TYPE_CHECKING:
    from .sale import Sale
    from .products import Product


class Saleitem(SQLModel, table=True):
    id: int = Field(default=None, primary_key=True)
    sale_id: int = Field(foreign_key="sale.id")
    product_id: int = Field(foreign_key="product.id")
    unit_price_at_sale: float
    subtotal: float
    quantity: int
    price: float
    model_config = {
        "arbitrary_types_allowed": True,
    }
    
   # sale: "Sale" = Relationship(back_populates="saleitems")
   # product: "Product" = Relationship( back_populates="sale_entries")