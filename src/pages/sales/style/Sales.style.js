import styled from 'styled-components';
import { breakpoint } from '../../../const/Breakpoint';

export const WrapperSales = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  
 
`
export const Nav = styled.nav`
  grid-column: 1 / 4;
  grid-auto-rows: minmax(100px, auto);
  backdrop-filter: blur(10px); 
  border-radius: 10px;
  //background-color: rgba(0, 0, 0, 0.2); 
  display: flex;
  padding: 5px;

`

export const Logo = styled.img`
  height: 50px;
  margin-right: 35px;
  align-self: center;
  z-index: 1000;

`;

export const WrapperForm = styled.div`
  grid-column: 1/4;
  grid-row: 2/8;
  backdrop-filter: blur(10px);  
  backdrop-filter: blur(10px); 
  padding: 15px;
  @media ${breakpoint.desktop} {
    grid-column: 1/5;

  }
`;

export const WrapperResume = styled.div`
  grid-column: 4/4;
  grid-row: 1/8;
  height: 100vh;
  backdrop-filter: blur(10px); 
  box-shadow: rgba(124, 1, 225, 0.2) 0px 0px 10px;
  background-color: rgba(0, 0, 0, 0.1); 
  backdrop-filter: blur(10px); 
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 15px;
  box-sizing: border-box;
  gap: 2rem;

  @media ${breakpoint.desktop} {
    display: none;
  }



`;
export const Wrapper = styled.div`
`

export const TittleResume = styled.div`
color: #7c01ff;
font-size: 30px;
display: flex;
align-items: center;
justify-content: flex-start;
font-weight: 300;
justify-content: center;
`


