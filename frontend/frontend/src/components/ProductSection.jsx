import React from 'react';
import * as S from './ProductSection.styles';

export const ProductSection = ({ products, onAddToCart }) => {
  return (
    <S.Container>
      <S.Title>Choose Products</S.Title>
      <S.Grid>
        {products.map((product) => (
          <S.ProductCard key={product.id} onClick={() => onAddToCart(product)}>
            <div className="image-wrapper">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="info">
              <h3>{product.name}</h3>
              <p className="code">Code: {product.sku}</p>
              <p className="stock">Available: {product.stock}</p>
              <div className="footer">
                <span className="price">${product.price}</span>
                <div className="icon-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </S.ProductCard>
        ))}
      </S.Grid>
    </S.Container>
  );
};