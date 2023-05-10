import React, { useState, useEffect } from 'react';
import { NavbarWrapper, Logo, NavLinks, NavLink } from "./style/Navbar.style";

const NAV_ITEMS = [
  { label: "Vender", path: "/vender" },
  { label: "Comprar", path: "/comprar" },
  { label: "Cómo comprar", path: "/como-comprar" },
  { label: "Habímetro", path: "/habimetro" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > (90 * window.innerHeight) / 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavbarWrapper scrolled={scrolled}>
      <Logo
        src="https://s4-recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/524/000/original/habi-morado.png?1642725015"
        alt="Habi logo"
      />
      <NavLinks>
        {NAV_ITEMS.map((item, index) => (
          <NavLink key={index}>{item.label}</NavLink>
        ))}
      </NavLinks>
    </NavbarWrapper>
  );
};

export default Navbar;
