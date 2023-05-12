import React, { useState, useEffect } from "react";
import {
  Backdrop,
  MobileMenu,
  MobileMenuItem,
  HamburgerMenu,
  NavbarWrapper,
  ContentNav,
  Logo,
  NavLinks,
  NavLink,
} from "./style/Navbar.style";

const NAV_ITEMS = [
  { id: 3, label: "Vender", isHighlighted: true, path: "/vender" },
  { label: "Comprar", path: "/comprar" },
  { label: "¿Cómo comprar?", path: "/como-comprar" },
  { label: "Habímetro", path: "/habimetro" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > (10 * window.innerHeight) / 100) {
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
    <>
      <NavbarWrapper scrolled={scrolled}>
        <ContentNav>
          <Logo
            src="https://s4-recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/524/000/original/habi-morado.png?1642725015"
            alt="Habi logo"
          />
          <NavLinks>
            {NAV_ITEMS.map((item, index) => (
              <NavLink key={index} isHighlighted={item.isHighlighted}>
                {item.label}
              </NavLink>
            ))}
          </NavLinks>
          <HamburgerMenu onClick={toggleMobileMenu}>
            <div />
            <div />
            <div />
          </HamburgerMenu>
        </ContentNav>
      </NavbarWrapper>
      <Backdrop isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
      <MobileMenu isOpen={isMobileMenuOpen}>
        {NAV_ITEMS.map((item, index) => (
          <MobileMenuItem key={index} isHighlighted={item.isHighlighted}>
            {item.label}
          </MobileMenuItem>
        ))}
      </MobileMenu>
    </>
  );
};

export default Navbar;
