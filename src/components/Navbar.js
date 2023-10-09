// dependencies
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  height: 8vh;
  position: sticky;
  top: 0;
  display: flex;
  background-color: black;
  border-bottom: ${props => props.colorMode === "light" ? "1px solid black" : "1px solid white"};
`;
const LogoTab = styled.div`
  height: 100%;
  flex: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ItemTab = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
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

  // dynamic css styling //
  const commonLinkStyle = {
    fontSize: 20,
    fontWeight: 600,
    transition: "all 0.5s ease",
    textDecoration: "none",
  };
  const Tab1Style = {
    ...commonLinkStyle,
    fontSize: 22,
    color: isSelected === 1 ? "white" : isHover === 1 ? "white" : "silver",
    transform: isSelected === 1 ? "scale(1.1)" : isHover === 1 ? "scale(1.1)" : "scale(1)",
  };
  const Tab2Style = {
    ...commonLinkStyle,
    color: isSelected === 2 ? "white" : isHover === 2 ? "white" : "silver",
    transform: isSelected === 2 ? "scale(1.1)" : isHover === 2 ? "scale(1.1)" : "scale(1)",
  };
  const Tab3Style = {
    ...commonLinkStyle,
    color: isSelected === 3 ? "white" : isHover === 3 ? "white" : "silver",
    transform: isSelected === 3 ? "scale(1.1)" : isHover === 3 ? "scale(1.1)" : "scale(1)",
  };
  const Tab4Style = {
    ...commonLinkStyle,
    color: isSelected === 4 ? "white" : isHover === 4 ? "white" : "silver",
    transform: isSelected === 4 ? "scale(1.1)" : isHover === 4 ? "scale(1.1)" : "scale(1)",
  };

  return (
    <Nav colorMode={colorMode}>
      <LogoTab>
        <Link to="/" onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave} style={Tab1Style}>
          LV
        </Link>
      </LogoTab>
      <ItemTab>
        <Link to="/about" onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave} style={Tab2Style}>
          About
        </Link>
      </ItemTab>
      <ItemTab>
        <Link to="/portfolio" onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave} style={Tab3Style}>
          Portfolio
        </Link>
      </ItemTab>
      <ItemTab>
        <Link to="/contact" onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={handleMouseLeave} style={Tab4Style}>
          Contact
        </Link>
      </ItemTab>
    </Nav>
  );
};

export default Navbar;
