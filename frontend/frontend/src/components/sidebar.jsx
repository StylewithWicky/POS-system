import React, { useState } from 'react';
import { 
  LayoutDashboard, ShoppingCart, Receipt, Settings, 
  Users, LogOut, Search, ScanBarcode, Moon, Bell, Calendar 
} from 'lucide-react';
import * as S from './POSScreen.styles';

const Sidebar = () => (
  <S.SidebarContainer>
    <div className="logo-section">
      <div className="logo-icon">S</div>
      <span className="logo-text">Starline</span>
    </div>
    <S.NavItem active><ShoppingCart size={20} /><span>POS</span></S.NavItem>
    <S.NavItem><LayoutDashboard size={20} /><span>Dashboard</span></S.NavItem>
    <S.NavItem><Receipt size={20} /><span>Sales</span></S.NavItem>
    <S.NavItem><Users size={20} /><span>Customers & HR</span></S.NavItem>
    <div style={{ marginTop: 'auto' }}>
      <S.NavItem><Settings size={20} /><span>Settings</span></S.NavItem>
      <S.NavItem><LogOut size={20} color="#ef4444" /><span style={{color: '#ef4444'}}>Logout</span></S.NavItem>
    </div>
  </S.SidebarContainer>
);

const ProductCard = ({ name, code, price, stock, image }) => (
  <S.Card>
    <div className="img-container">
      <img src={image} alt={name} />
    </div>
    <h3>{name}</h3>
    <p className="code">Code: {code}</p>
    <div className="card-footer">
      <div>
        <p className="stock">Available: {stock}</p>
        <p className="price">${price}</p>
      </div>
      <button className="add-btn">+</button>
    </div>
  </S.Card>
);

// --- Main Page ---

const POSScreen = () => {
  const [activeTab, setActiveTab] = useState('POS Dashboard');

  return (
    <S.PageWrapper>
      <Sidebar />
      
      <S.MainContent>
        {/* Top Header */}
        <S.Header>
          <div className="welcome">
            <h2>Welcome, Josiah 👋</h2>
            <p>Here's what happening in your store.</p>
          </div>
          <div className="header-actions">
            <Search size={20} />
            <Moon size={20} />
            <Bell size={20} />
            <Calendar size={20} />
            <div className="profile-circle">J</div>
          </div>
        </S.Header>

        {/* Inner Navigation */}
        <S.SubNav>
          <div className="tabs">
            <button onClick={() => setActiveTab('POS Machine')}>POS Machine</button>
            <button className="active">POS Dashboard</button>
          </div>
          <div className="search-bar">
            <button className="view-orders">View All Orders</button>
            <div className="input-group">
              <Search size={18} className="search-icon" />
              <input type="text" placeholder="Search products..." />
              <button className="barcode-btn"><ScanBarcode size={18} /> Scan Barcode</button>
            </div>
          </div>
        </S.SubNav>

        {/* Product Grid & Cart Area */}
        <S.ContentGrid>
          <section className="products-section">
            <S.CategoryStrip>
                <div className="cat-item active">All <span>23145</span></div>
                <div className="cat-item">T-shirt <span>224</span></div>
                <div className="cat-item">Jeans <span>125</span></div>
                <div className="cat-item">Shirt <span>509</span></div>
            </S.CategoryStrip>

            <div className="products-grid">
                <ProductCard name="Classic Navy Tee" code="1254654" price="120" stock="200" image="/api/placeholder/100/100" />
                <ProductCard name="Yellow Mens Sleeve" code="1254654" price="120" stock="200" image="/api/placeholder/100/100" />
                <ProductCard name="Big Dreams White" code="1254654" price="120" stock="200" image="/api/placeholder/100/100" />
                <ProductCard name="Casual Blue Shirt" code="1254654" price="120" stock="200" image="/api/placeholder/100/100" />
                <ProductCard name="Grey Pocket Tee" code="1254654" price="120" stock="200" image="/api/placeholder/100/100" />
                <ProductCard name="Denim Jacket" code="1254654" price="120" stock="200" image="/api/placeholder/100/100" />
            </div>
          </section>

          {/* Sidebar Cart */}
          <S.CartPanel>
            <h3>Order No: 125125</h3>
            <div className="cart-items">
                <div className="item">
                    <div className="item-img" />
                    <div className="item-info">
                        <p>Product full name will go here</p>
                        <span>Size: M  Quantity: 2</span>
                    </div>
                    <p className="item-price">$200</p>
                </div>
            </div>

            <S.SummaryBox>
                <div className="row"><span>Subtotal</span> <span>$85.25</span></div>
                <div className="row"><span>Discount (5%)</span> <span>$20</span></div>
                <div className="row total"><span>Total Amount</span> <span>$77.00</span></div>
            </S.SummaryBox>

            <S.KeypadGrid>
                {[7,8,9,'C', 4,5,6,'+', 1,2,3,'-', '.', 0].map(val => (
                    <button key={val} className="key-btn">{val}</button>
                ))}
                <button className="pay-btn">Payment</button>
            </S.KeypadGrid>
            <div className="cart-footer">
                <button>Refund</button>
                <button>End Session</button>
            </div>
          </S.CartPanel>
        </S.ContentGrid>
      </S.MainContent>
    </S.PageWrapper>
  );
};

export default POSScreen;
