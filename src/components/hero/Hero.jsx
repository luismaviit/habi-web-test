import React from 'react';
import { Hero, HeroTitle, SellButton } from './style/Hero.style';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Hero>
      <HeroTitle>Compramos tu vivienda en 10 días</HeroTitle>
      <SellButton onClick={()=>navigate("/sales")}>Vender</SellButton>
    </Hero>
  );
};

export default Home;
