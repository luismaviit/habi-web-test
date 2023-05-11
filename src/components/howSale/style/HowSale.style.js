import styled from 'styled-components';

export const HowSaleSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color:#F6fcff;
  padding: 2rem;
  height: 100vh;
`;
export const SubTitle = styled.h4`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0rem;
  color:rgb(148, 148, 148);
  letter-spacing: 5px;
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

export const ItemsWrapper = styled.ul`
  flex: 1;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
`;

export const Item = styled.li`
  gap: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
