import styled from 'styled-components';

export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  background-color: ${({ scrolled }) => (scrolled ? 'rgba(255, 255, 255, 0.5)' : 'transparent')};
  backdrop-filter: ${({ scrolled }) => (scrolled ? 'blur(10px)' : 'none')};
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
`;

export const Logo = styled.img`
  height: 50px;
  margin-right: 25px;
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
`;

export const NavLink = styled.div`
  color: ${({ isHighlighted }) => (isHighlighted ? 'rgb(124, 1, 255)' : '#333')};
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 100%;
    height: 2px;
    background-color: ${({ isHighlighted }) => (isHighlighted ? 'rgb(124, 1, 255)' : 'transparent')};
    transition: background-color 0.3s ease;
  }

  &:hover {
    color: rgb(124, 1, 255);

    &::after {
      background-color: rgb(124, 1, 255);
    }
  }
`;
