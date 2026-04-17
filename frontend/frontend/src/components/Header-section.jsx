import React from 'react';
import { Search, Moon, Bell, Calendar, ScanBarcode } from 'lucide-react';
import * as S from './HeaderSection.styles';

export const HeaderSection = () => {
  return (
    <S.Container>
      {/* Top Row: Welcome & Global Icons */}
      <S.TopRow>
        <div className="welcome-text">
          <h1>Welcome, Josiah 👋</h1>
          <p>Here's what happening in your store.</p>
        </div>
        
        <S.GlobalActions>
          <div className="icon-group">
            <button><Search size={18} /></button>
            <button><Moon size={18} /></button>
            <button className="notifications">
              <Bell size={18} />
              <span className="badge">2</span>
            </button>
            <button><Calendar size={18} /></button>
          </div>
          <div className="profile-avatar">
            <img src="https://ui-avatars.com/api/?name=Josiah+User&background=FFD700&color=000" alt="profile" />
          </div>
        </S.GlobalActions>
      </S.TopRow>

      {/* Middle Row: View Switcher */}
      <S.ViewSwitcher>
        <button className="tab">POS Machine</button>
        <button className="tab active">POS Dashboard</button>
      </S.ViewSwitcher>

      {/* Bottom Row: Utility Bar */}
      <S.UtilityBar>
        <button className="view-orders-btn">View All Orders</button>
        
        <S.SearchContainer>
          <div className="search-input-wrapper">
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="Search products..." />
          </div>
          <button className="barcode-btn">
            <ScanBarcode size={18} />
            <span>Scan Barcode</span>
          </button>
        </S.SearchContainer>
      </S.UtilityBar>
    </S.Container>
  );
};