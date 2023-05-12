import styled from 'styled-components';
import { breakpoint } from '../../../const/Breakpoint';

export const HowSaleSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color:#F6fcff;

  @media ${breakpoint.desktop} {
   
   min-width: 100vw;
 }
 
 @media ${breakpoint.large_mobile} {
   
   min-width: 118.5vw;
 }
 @media ${breakpoint.mobile} {
  display: flex;
  min-width: 125.8vw;

  height:300vw;
 }

 
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
    font-size: 0.8rem;
  }

  @media ${breakpoint.mobile} {
    font-size: 0.8rem;
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
  @media ${breakpoint.tablet} {
   display: flex;
  flex-direction: column;
  justify-content: center;
 }
 
 @media ${breakpoint.large_mobile} {
   align-self: center;
   min-width: 100vw;
 }
  
`;

export const ImageWrapper = styled.div`
  flex: 1;
  height: 560px;
  max-width: 600px;

  @media ${breakpoint.desktop} {
    height: 400px;
    width: 500px;
  }

  @media ${breakpoint.tablet} {
    align-self: center;
    height: 300px;
    max-width: 400px;
  }

  @media ${breakpoint.large_mobile} {
    height: 300px;
    min-width: 400px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const ItemsWrapper = styled.ul`

  width: 510px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media ${breakpoint.large_mobile} {
    margin-right:35px;
  }
  @media ${breakpoint.mobile} {
  
    align-self: center;
    height: 400px;
    width: 300px;
  }
`;

export const Item = styled.li`
  gap: 0rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 130px;
  width: 624px;
  border: 1px solid rgb(214, 243, 255);
  box-sizing: border-box;
  padding: 0.5rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  @media ${breakpoint.large_mobile} {
    gap: -5;
    padding: 2px;
    margin-right: 5px;
    height: 350px;
    width: 100vw;
    
  }
  @media ${breakpoint.mobile} {
    gap: -5;
    padding: 2px;
    margin-right: 5px;
    height: 350px;
    width: 110vw;
    
  }
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
  line-height: auto;
  margin-bottom: 0px;
  font-weight: 600;
  
`;

export const SubText = styled.h3`
  color: rgb(148, 148, 148);
  font-size: 12px;
  line-height: auto;
  
`;