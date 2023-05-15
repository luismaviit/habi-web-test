import React from "react";
import {
  Hero,
  BackgroundImage,
  HeroTitle,
  SellButton,
} from "./style/Hero.style";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Hero>
      <BackgroundImage src="https://res.cloudinary.com/rawwshak/image/upload/v1683735483/mano-que-presenta-casa-modelo-campana-prestamos-hipotecarios_zpxv0w.jpg" />
      <HeroTitle>Compramos tu vivienda en 10 días</HeroTitle>
      <SellButton onClick={() => navigate("/sales/datos-cliente")}>Vender</SellButton>
    </Hero>
  );
};

export default Home;
