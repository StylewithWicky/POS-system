import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  overflow: hidden;
`;

export const ScrollContainer = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 8px; /* Room for scrollbar if it appears */
  
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const CategoryCard = styled.div`
  min-width: 120px;
  padding: 16px 20px;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Styling based on active state */
  background: ${props => props.isActive ? '#333333' : '#FFFFFF'};
  color: ${props => props.isActive ? '#FFFFFF' : '#333333'};
  border: 1px solid ${props => props.isActive ? '#333333' : '#F3F4F6'};
  box-shadow: ${props => props.isActive ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : 'none'};

  .category-name {
    font-size: 0.75rem;
    font-weight: 500;
    margin-bottom: 8px;
    opacity: ${props => props.isActive ? 0.7 : 0.5};
  }

  .category-count {
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  &:hover {
    transform: translateY(-2px);
    background: ${props => props.isActive ? '#333333' : '#F9FAFB'};
    border-color: ${props => props.isActive ? '#333333' : '#E5E7EB'};
  }

  &:active {
    transform: translateY(0);
  }
`;