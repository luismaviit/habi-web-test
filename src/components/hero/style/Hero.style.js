import styled, { keyframes } from 'styled-components';
import { breakpoint } from '../../../const/Breakpoint';
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Hero = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around; 
  height: 100vh;
  padding: 2rem;
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height:100%;
    background-color: rgba(0, 0, 0, 0.2); 
    @media ${breakpoint.large_mobile} {
      display: none;
    }
  }
  @media ${breakpoint.large_mobile} {
    margin-left: 30px;
    position: relative;
    //background-color: rgba(0, 0, 0, 0.2); 
    min-width: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  @media ${breakpoint.large_mobile} {
    display: none;
  }
`;



export const HeroTitle = styled.h1`
  color: #7c01ff;
  text-shadow: rgba(0,0,0,0.3) 0.1em 0.1em 0.2em;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  transform: translateY(20px);
  opacity: 0;
  animation: ${slideUp} 1s ease-out 1s forwards;
  @media ${breakpoint.desktop} {
    font-size: 2.8rem;
  }
  @media ${breakpoint.tablet} {
    font-size: 2.6rem;
  }
  @media ${breakpoint.large_mobile} {
    font-size: 2.4rem;
  }
  @media ${breakpoint.desktop} {
    font-size: 2.2rem;
  }
`;

export const SellButton = styled.button`
  background-color: #7c01ff;
  box-shadow: rgba(0,0,0,0.3) 0.1em 0.1em 0.2em;
  font-family: Roboto;
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  transform: translateY(20px);
  opacity: 0;
  animation: ${slideUp} 1s ease-out 2s forwards;
  &:hover {
    background-color: #5e019d;
  }
  @media ${breakpoint.desktop} {
    font-size: 1.3rem;
  }
  @media ${breakpoint.tablet} {
    font-size: 1.3rem;
  }
  @media ${breakpoint.large_mobile} {
    font-size: 1.3rem;
  }
  @media ${breakpoint.desktop} {
    font-size: 1.3rem;
  }
`;
