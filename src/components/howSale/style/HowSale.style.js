import styled from 'styled-components';
import { breakpoint } from '../../../const/Breakpoint';

export const HowSaleSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color:#F6fcff;
  padding: 2rem;
 
`;

export const SubTitle = styled.h4`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0rem;
  color:rgb(148, 148, 148);
  letter-spacing: 5px;
  @media ${breakpoint.desktop} {
    font-size: 0.8rem;
  }

  @media ${breakpoint.tablet} {
    font-size: 0.6rem;
  }

  @media ${breakpoint.mobile} {
    font-size: 0.4rem;
  }
`;

export const Title = styled.h2`
text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  @media ${breakpoint.desktop} {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  height: 560px;
  max-width: 628px;

  @media ${breakpoint.desktop} {
    height: 400px;
    max-width: 500px;
  }

  @media ${breakpoint.tablet} {
    height: 300px;
    max-width: 400px;
  }

  @media ${breakpoint.mobile} {
    height: 200px;
    max-width: 300px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const ItemsWrapper = styled.ul`
  width: 628px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Item = styled.li`
  gap: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-height: 123px;
  max-width: 624px;
  border: 1px solid rgb(214, 243, 255);
  box-sizing: border-box;
  padding: 0.5rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

export const IconWrapper = styled.div`

  background: rgb(235, 249, 255);
  border-radius: 8px;
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const TextWrapper = styled.h3`
  display: flex;
  flex-direction: column;
`;

export const TextTittle = styled.h3`
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 12px;
  font-weight: 600;
  
`;

export const SubText = styled.h3`
  color: rgb(148, 148, 148);
  font-size: 12px;
  line-height: 18px;
  
`;