import styled, { keyframes } from 'styled-components';

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 28rem;
  height: 93vh;
  background-image: url('https://res.cloudinary.com/rawwshak/image/upload/v1683735483/mano-que-presenta-casa-modelo-campana-prestamos-hipotecarios_zpxv0w.jpg');
  background-size: cover;
  background-position: center;
  padding: 2rem;
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
`;

export const HeroTitle = styled.h1`
  color: #7c01ff;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  transform: translateY(20px);
  opacity: 0;
  animation: ${slideUp} 1s ease-out 1s forwards;
`;

export const SellButton = styled.button`
  background-color: #7c01ff;
  color: white;
  font-size: 2rem;
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
`;
