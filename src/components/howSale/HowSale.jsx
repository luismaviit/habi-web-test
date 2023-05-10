import React from 'react';
import {
  HowSaleSection,
  Title,
  Content,
  ImageWrapper,
  Image,
  ItemsWrapper,
  Item,
} from './style/HowSale.style';

const ITEMS = [
  // Tus items a mapear, por ejemplo:
  { id: 1, text: 'Item 1' },
  { id: 2, text: 'Item 2' },
  { id: 3, text: 'Item 3' },
];

const HowSale = () => {
  return (
    <HowSaleSection>
      <Title>Así funciona el proceso</Title>
      <Content>
        <ImageWrapper>
          <Image
            src="https://habi.co/static/d2814fda9334bd98369c66c08751dc09/06f8f/img_cel_desk_1_4_a119621cf8.webp"
            alt="Imagen ilustrativa"
          />
        </ImageWrapper>
        <ItemsWrapper>
          {ITEMS.map((item) => (
            <Item key={item.id}>{item.text}</Item>
          ))}
        </ItemsWrapper>
      </Content>
    </HowSaleSection>
  );
};

export default HowSale;
