import React from 'react';
import * as S from './CategoryStrip.styles';

const categories = [
  { id: 1, name: 'All', count: 23145 },
  { id: 2, name: 'T-shirt', count: 224 },
  { id: 3, name: 'Jeans pant', count: 125 },
  { id: 4, name: 'Shirt', count: 509 },
  { id: 5, name: 'Trouser', count: 100 },
  { id: 6, name: 'Koti', count: 225 },
  { id: 7, name: 'Money bag', count: 425 },
];

export const CategoryStrip = ({ activeCategory, onCategoryChange }) => {
  return (
    <S.Wrapper>
      <S.ScrollContainer>
        {categories.map((cat) => (
          <S.CategoryCard
            key={cat.id}
            isActive={activeCategory === cat.name}
            onClick={() => onCategoryChange(cat.name)}
          >
            <span className="category-name">{cat.name}</span>
            <span className="category-count">{cat.count}</span>
          </S.CategoryCard>
        ))}
      </S.ScrollContainer>
    </S.Wrapper>
  );
};