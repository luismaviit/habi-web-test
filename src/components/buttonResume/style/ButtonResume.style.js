import styled from 'styled-components';
import { breakpoint } from '../../../const/Breakpoint';


export const Button = styled.button`
 display: none;

@media ${breakpoint.desktop} {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: none;
  background-color: rgba(124, 1, 225, 0.8); 
  color: white;
  border-radius: 10px; 
  cursor: pointer;
  transition: background-color 0.3s ease;
  position: fixed;
  bottom: 20px;  
  right: 100px; 

  &:hover {
    background-color: rgba(124, 1, 225, 1)
  }

   
 }
  
  
`;