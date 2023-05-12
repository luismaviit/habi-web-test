import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import HowSale from "../../components/howSale/HowSale";
import {
  HomePageWrapper,
  Header,
  Banner,
  HowSaleWrapper,
} from "./style/Home.style";

function Home() {
  return (
    <HomePageWrapper>
      <Header>
        <Navbar />
      </Header>
      <Banner>
        <Hero />
      </Banner>
      <HowSaleWrapper>
        <HowSale />
      </HowSaleWrapper>
    </HomePageWrapper>
  );
}

export default Home;
