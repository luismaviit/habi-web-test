import styled from 'styled-components';

export const HowSaleSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:rgb(246, 252, 255);
  padding: 2rem;
  height: 100vh;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

export const ImageWrapper = styled.div`
  flex: 1;
  height: 80%;
  max-width: 50%;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const ItemsWrapper = styled.div`
  flex: 1;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Item = styled.div`
  // Estilos para cada item
`;
