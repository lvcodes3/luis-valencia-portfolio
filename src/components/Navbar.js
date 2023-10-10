// dependencies //
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  position: sticky;
  top: 0;
  display: flex;
  background-color: black;
  border-bottom: ${(props) => props.colormode === "light" ? "1px solid black" : "1px solid white"};
`;

const BaseTab = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LogoTab = styled(BaseTab)`
  flex: 1.5;
`;
const ItemTab = styled(BaseTab)`
  flex: 1;
`;

const BaseLink = styled(Link)`
  font-size: 20px;
  font-weight: 600;
  transition: all 0.5s ease;
  text-decoration: none;
`;
const HomeLink = styled(BaseLink)`
  font-size: 22;
  color: ${(props) => props.isSelected === 1 || props.isHover === 1 ? "white" : "silver"};
  transform: ${(props) => props.isSelected === 1 || props.isHover === 1 ? "scale(1.1)" : "scale(1)"};
`;
const AboutLink = styled(BaseLink)`
  color: ${(props) => props.isSelected === 2 || props.isHover === 2 ? "white" : "silver"};
  transform: ${(props) => props.isSelected === 2 || props.isHover === 2 ? "scale(1.1)" : "scale(1)"};
`;
const PortfolioLink = styled(BaseLink)`
  color: ${(props) => props.isSelected === 3 || props.isHover === 3 ? "white" : "silver"};
  transform: ${(props) => props.isSelected === 3 || props.isHover === 3 ? "scale(1.1)" : "scale(1)"};
`;
const ContactLink = styled(BaseLink)`
  color: ${(props) => props.isSelected === 4 || props.isHover === 4 ? "white" : "silver"};
  transform: ${(props) => props.isSelected === 4 || props.isHover === 4 ? "scale(1.1)" : "scale(1)"};
`;

const Navbar = ({ colorMode }) => {
  const location = useLocation();
  const [isHover, setIsHover] = useState(null);
  const [isSelected, setIsSelected] = useState(null);

  useEffect(() => {
    if (location.pathname === "/") {
      setIsSelected(1);
    } else if (location.pathname === "/about") {
      setIsSelected(2);
    } else if (location.pathname === "/portfolio") {
      setIsSelected(3);
    } else if (location.pathname === "/contact") {
      setIsSelected(4);
    }
  }, [location.pathname]);

  const handleMouseEnter = (idx) => {
    setIsHover(idx);
  };

  const handleMouseLeave = () => {
    setIsHover(null);
  };

  return (
    <Nav colorMode={colorMode}>
      <LogoTab>
        <HomeLink to="/" onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave} isSelected={isSelected} isHover={isHover}>
          LV
        </HomeLink>
      </LogoTab>
      <ItemTab>
        <AboutLink to="/about" onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave} isSelected={isSelected} isHover={isHover}>
          About
        </AboutLink>
      </ItemTab>
      <ItemTab>
        <PortfolioLink to="/portfolio" onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave} isSelected={isSelected} isHover={isHover}>
          Portfolio
        </PortfolioLink>
      </ItemTab>
      <ItemTab>
        <ContactLink to="/contact" onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={handleMouseLeave} isSelected={isSelected} isHover={isHover}>
          Contact
        </ContactLink>
      </ItemTab>
    </Nav>
  );
};

export default Navbar;
