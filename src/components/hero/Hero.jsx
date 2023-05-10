import React from 'react';
import { Hero, HeroTitle, SellButton } from './style/Hero.style';

const Home = () => {
  return (
    <Hero>
      <HeroTitle>Compramos tu vivienda en 10 días</HeroTitle>
      <SellButton>Vender</SellButton>
    </Hero>
  );
};

export default Home;
