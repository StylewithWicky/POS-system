import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .welcome-text h1 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
  }
  .welcome-text p {
    color: #9ca3af;
    font-size: 0.85rem;
    margin-top: 4px;
  }
`;

export const GlobalActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  padding: 6px 12px;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.3);

  .icon-group {
    display: flex;
    gap: 12px;
    padding-right: 12px;
    border-right: 1px solid #e5e7eb;
    
    button {
      background: none;
      border: none;
      color: #6b7280;
      cursor: pointer;
      display: flex;
      align-items: center;
      position: relative;
      
      &:hover { color: #000; }

      .badge {
        position: absolute;
        top: -4px;
        right: -4px;
        background: #ff4d4d;
        color: white;
        font-size: 10px;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .profile-avatar img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid white;
  }
`;

export const ViewSwitcher = styled.div`
  background: rgba(229, 231, 235, 0.5);
  display: flex;
  padding: 6px;
  border-radius: 12px;
  width: fit-content;

  .tab {
    padding: 8px 20px;
    border: none;
    background: transparent;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    border-radius: 8px;
    color: #6b7280;
    transition: all 0.2s;

    &.active {
      background: white;
      color: #000;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
      text-decoration: underline; /* Matching the underline in image */
      text-underline-offset: 4px;
    }
  }
`;

export const UtilityBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .view-orders-btn {
    background: white;
    border: 1px solid #e5e7eb;
    padding: 10px 20px;
    border-radius: 12px;
    font-weight: 600;
    font-size: 0.85rem;
    cursor: pointer;
    &:hover { background: #f9fafb; }
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  gap: 12px;
  flex: 0.6; /* Matches the layout balance in your image */

  .search-input-wrapper {
    flex: 1;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    display: flex;
    align-items: center;
    padding: 0 12px;
    
    .search-icon { color: #9ca3af; }
    
    input {
      border: none;
      background: transparent;
      padding: 10px;
      width: 100%;
      outline: none;
      font-size: 0.9rem;
    }
  }

  .barcode-btn {
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    white-space: nowrap;

    &:hover { background: #f3f4f6; }
  }
`;