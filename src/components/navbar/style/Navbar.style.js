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

export const NavLink = styled.li`
  cursor: pointer;
`;
