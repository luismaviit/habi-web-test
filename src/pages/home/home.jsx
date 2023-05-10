import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Hero from '../../components/hero/Hero'
import HowSale from '../../components/howSale/HowSale';

function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <HowSale/>
    </div>
  )
}

export default Home;