import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(135deg, #e2e2e2 0%, #ffffff 100%);
    font-family: 'Inter', sans-serif;
    margin: 0;
    overflow: hidden;
  }
`;

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr 400px;
  height: 100vh;
  padding: 20px;
  gap: 20px;
  box-sizing: border-box;
`;

// Sidebar with the specific Lime-Green highlight
export const Sidebar = styled.nav`
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(12px);
  border-radius: 24px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);

  .nav-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 20px;
    border-radius: 16px;
    color: #666;
    font-weight: 500;
    cursor: pointer;
    transition: 0.3s;

    &.active {
      background: #E2FF54; // That specific neon-lime from the image
      color: #000;
      box-shadow: 0 4px 15px rgba(226, 255, 84, 0.4);
    }
  }
`;

// Product Cards
export const ProductCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 15px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.03);
  border: 1px solid #f0f0f0;

  .img-box {
    background: ${props => props.bgColor || '#f9fafb'};
    border-radius: 15px;
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
    img { width: 80%; object-fit: contain; }
  }

  h3 { font-size: 0.9rem; margin: 0; color: #333; }
  span { font-size: 0.75rem; color: #999; }
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    font-weight: 700;
  }
`;

// The Floating Right Panel
export const CartPanel = styled.div`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border-radius: 30px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 50px rgba(0,0,0,0.05);
  border: 1px solid rgba(255, 255, 255, 0.5);

  .totals-area {
    background: #F4F0FF; // Soft purple background from image
    border-radius: 20px;
    padding: 20px;
    margin: 20px 0;
    
    .row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
      font-size: 0.9rem;
      color: #666;
      &.grand-total {
        color: #000;
        font-weight: 800;
        font-size: 1.1rem;
        border-top: 1px solid #ddd;
        padding-top: 10px;
        margin-top: 10px;
      }
    }
  }

  .payment-btn {
    background: #9D79FF; // Purple button
    color: white;
    border: none;
    padding: 18px;
    border-radius: 15px;
    font-weight: 700;
    font-size: 1.1rem;
    cursor: pointer;
    box-shadow: 0 10px 20px rgba(157, 121, 255, 0.3);
  }
`;