import React from "react";
import {
  HowSaleSection,
  SubTitle,
  Title,
  Content,
  ImageWrapper,
  Image,
  ItemsWrapper,
  Item,
  IconWrapper,
  TextWrapper,
  TextTittle,
  SubText,
} from "./style/HowSale.style";
import ITEMS from "./const/items";

const HowSale = () => {
  return (
    <HowSaleSection>
      <SubTitle> ¿Quieres vender?</SubTitle>
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
            <Item key={item.id}>
              <IconWrapper>
                <img src={item.icon} alt="icon" />
              </IconWrapper>
              <TextWrapper>
                <TextTittle>{item.text}</TextTittle>
                <SubText>{item.subtext}</SubText>
              </TextWrapper>
            </Item>
          ))}
        </ItemsWrapper>
      </Content>
    </HowSaleSection>
  );
};

export default HowSale;
