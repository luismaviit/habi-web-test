import styled from 'styled-components';
import { breakpoint } from '../../../const/Breakpoint';
import { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
`;


export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ scrolled }) => (scrolled ? 'rgba(255, 255, 255, 0.5)' : 'transparent')};
  backdrop-filter: ${({ scrolled }) => (scrolled ? 'blur(10px)' : 'none')};
  padding: 0.2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
 
  
`;
export const ContentNav = styled.div`
max-width: 80%;
width: 100%;
display: flex;
align-items: center;
@media ${breakpoint.tablet} {
    justify-content: space-between;
  }


`

export const Logo = styled.img`
  height: 50px;
  margin-right: 25px;
  @media ${breakpoint.desktop} {
    height: 48px;
  }

  @media ${breakpoint.tablet} {
    height: 46px;
  }

  @media ${breakpoint.mobile} {
    height: 44px;
  }

  margin-right: 25px;
`;


export const NavLinks = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  @media ${breakpoint.tablet} {
    display: none;
  }
`;

export const NavLink = styled.div`
  color: ${({ isHighlighted }) => (isHighlighted ? 'rgb(124, 1, 255)' : '#333')};
  cursor: pointer;
  font-size: 1.2rem;
  position: relative;
  font-weight: 600;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -20px;
    width: 100%;
    height: 4px;
    background-color: ${({ isHighlighted }) => (isHighlighted ? 'rgb(124, 1, 255)' : 'transparent')};
    transition: background-color 0.3s ease;
  }

  &:hover {
    color: rgb(124, 1, 255);

    &::after {
      background-color: rgb(124, 1, 255);
    }
  }
  @media ${breakpoint.desktop} {
    font-size: 1.15rem;
  }

  @media ${breakpoint.tablet} {
    font-size: 1.1rem;
  }

  @media ${breakpoint.mobile} {
    font-size: 1.05rem;
  }
`;
export const HamburgerMenu = styled.div`
  display: none;
  width: 30px;
  height: 20px;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  @media ${breakpoint.tablet} {
    display: flex;
  }

  div {
    width: 100%;
    height: 3px;
    background-color: #333;
  }
`;
export const MobileMenu = styled.div`
 visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};  position: fixed;
  top: 0;
  right: 0;
  width: 30%; 
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(5px);
  padding: 1rem;
  z-index: 1000;
  overflow: auto;
  transition: transform 0.3s ease-in-out;
  animation: ${({ isOpen }) => isOpen ? fadeIn : fadeOut} 0.3s linear;

  @media ${breakpoint.tablet} {
    width: 30%;
  }
`;


export const MobileMenuItem = styled.div`
  color: ${({ isHighlighted }) => (isHighlighted ? 'rgb(124, 1, 255)' : '#333')};
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem 0;
`;

export const Backdrop = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
`;





