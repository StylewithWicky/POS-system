// Inside CartPanel.styles.js
export const CartItem = styled.div`
  display: flex;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid #f3f4f6;

  .item-thumb {
    width: 50px;
    height: 50px;
    border-radius: 8px;
    background: #FF9F66; /* Match the orange in your photo */
    overflow: hidden;
    img { width: 100%; height: 100%; object-fit: cover; }
  }

  .item-details {
    flex: 1;
    h4 { font-size: 0.85rem; font-weight: 600; margin-bottom: 2px; }
    p { font-size: 0.7rem; color: #9ca3af; }
  }

  .item-price {
    font-weight: 700;
    font-size: 0.9rem;
    align-self: flex-end;
  }
`;