// dependencies //
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = styled.header`
  width: 100%;
  height: 60px;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  border-bottom: ${(props) => (props.colormode === "light" ? "1px solid black" : "1px solid white")};

  nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .nav-btn {
    margin-right: 5%;
    padding: 5px;
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    color: white;
    /* default hidden */
    visibility: hidden;
    opacity: 0;
    font-size: 22px;
  }

  @media (max-width: 768px) {
    .nav-btn {
        visibility: visible;
        opacity: 1;
    }

    nav {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: black;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        transform: translateY(-100vh);
    }

    .responsive_nav {
        transform: none;
    }

    .nav-close-btn {
        position: absolute;
        top: 2rem;
        right: 2rem;
    }
  }
`;

const BaseLink = styled(Link)`
  font-size: 20px;
  font-weight: 600;
  transition: all 0.5s ease;
  text-decoration: none;
  padding: 20px;
`;
const HomeLink = styled(BaseLink)`
  margin-left: 10%;
  font-size: 22px;
  color: ${(props) => (props.isSelected === 1 || props.isHover === 1 ? "white" : "silver")};
  transform: ${(props) => (props.isSelected === 1 || props.isHover === 1 ? "scale(1.1)" : "scale(1)")};
`;
const AboutLink = styled(BaseLink)`
  color: ${(props) => (props.isSelected === 2 || props.isHover === 2 ? "white" : "silver")};
  transform: ${(props) => (props.isSelected === 2 || props.isHover === 2 ? "scale(1.1)" : "scale(1)")};
`;
const PortfolioLink = styled(BaseLink)`
  color: ${(props) => (props.isSelected === 3 || props.isHover === 3 ? "white" : "silver")};
  transform: ${(props) => (props.isSelected === 3 || props.isHover === 3 ? "scale(1.1)" : "scale(1)")};
`;
const ContactLink = styled(BaseLink)`
  color: ${(props) => (props.isSelected === 4 || props.isHover === 4 ? "white" : "silver")};
  transform: ${(props) => (props.isSelected === 4 || props.isHover === 4 ? "scale(1.1)" : "scale(1)")};
`;

const Navbar = ({ colorMode }) => {
    const navRef = useRef();
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

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <Header colorMode={colorMode}>
            <HomeLink to="/" onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave} isSelected={isSelected} isHover={isHover}>
                LV
            </HomeLink>
            <nav ref={navRef}>
                <AboutLink to="/about" onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave} isSelected={isSelected} isHover={isHover}>
                    About
                </AboutLink>
                <PortfolioLink to="/portfolio" onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave} isSelected={isSelected} isHover={isHover}>
                    Portfolio
                </PortfolioLink>
                <ContactLink to="/contact" onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={handleMouseLeave} isSelected={isSelected} isHover={isHover}>
                    Contact
                </ContactLink>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />        
            </button>
        </Header>
    );
};

export default Navbar;