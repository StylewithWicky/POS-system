import styled from 'styled-components';

export const Container = styled.section`
  flex: 1;
`;

export const Title = styled.h2`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #333;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
`;

export const ProductCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 12px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  border: 1px solid #f3f4f6;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  }

  .image-wrapper {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 16px;
    background: #f9fafb; /* Default fallback */
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin-bottom: 12px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  h3 {
    font-size: 0.9rem;
    font-weight: 600;
    color: #333;
    line-height: 1.4;
    height: 2.8rem;
    overflow: hidden;
  }

  .code, .stock {
    font-size: 0.75rem;
    color: #9ca3af;
    margin: 2px 0;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

    .price {
      font-weight: 800;
      font-size: 1.1rem;
    }

    .icon-badge {
      color: #d1d5db;
    }
  }
`;