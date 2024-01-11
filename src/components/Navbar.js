// dependencies //
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const ResponsiveNav = styled.nav`
  width: 100%;
  height: 60px;
  position: sticky;
  top: 0;
  display: flex;
  background-color: black;
  border-bottom: ${(props) => (props.colormode === "light" ? "1px solid black" : "1px solid white")};

  #nav-main-logo {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 3;
  }

  #nav-desktop-menu {
    display: flex;
    flex: 7;
    border: 2px solid green;

    .nav-desktop-item {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
    }
  }

  #nav-mobile-menu-btn {
    display: ${(props) => (props.mobileMenuVisible ? "flex" : "none")};
    cursor: pointer;
    font-size: 22px;
    color: white;
    margin-right: 20px;
    justify-content: center;
    align-items: center;
  }

  #nav-mobile-menu {
    display: ${(props) => (props.mobileMenuVisible ? "flex" : "none")};
    flex-direction: column;
    align-items: flex-end;
  }

  @media (max-width: 768px) {
    #nav-desktop-menu {
      display: none;
    }

    #nav-mobile-menu-btn {
      display: flex;
    }
  }

  @media (min-width: 769px) {
    #nav-desktop-menu {
      display: flex;
    }

    #nav-mobile-menu-btn {
      display: none;
    }

    #nav-mobile-menu {
      display: none;
    }
  }
`;

const BaseLink = styled(Link)`
  font-size: 20px;
  font-weight: 600;
  transition: all 0.5s ease;
  text-decoration: none;
`;
const HomeLink = styled(BaseLink)`
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
  const location = useLocation();
  const [isHover, setIsHover] = useState(null);
  const [isSelected, setIsSelected] = useState(null);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

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

  const handleMobileMenuBtnClick = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <ResponsiveNav colorMode={colorMode} mobileMenuVisible={mobileMenuVisible}>
      <div id='nav-main-logo'>
        <HomeLink to="/" onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave} isSelected={isSelected} isHover={isHover}>
          LV
        </HomeLink>
      </div>
      <div id='nav-desktop-menu'>
        <div className='nav-desktop-item'>
          <AboutLink to="/about" onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave} isSelected={isSelected} isHover={isHover}>
            About
          </AboutLink>
        </div>
        <div className='nav-desktop-item'>
          <PortfolioLink to="/portfolio" onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave} isSelected={isSelected} isHover={isHover}>
            Portfolio
          </PortfolioLink>
        </div>
        <div className='nav-desktop-item'>
          <ContactLink to="/contact" onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={handleMouseLeave} isSelected={isSelected} isHover={isHover}>
            Contact
          </ContactLink>
        </div>
      </div>
      <div id='nav-mobile-menu-btn' onClick={handleMobileMenuBtnClick}>&#9776;</div>
      <div id='nav-mobile-menu'>
        <nav className='nav-mobile-item'>
          <AboutLink to="/about" onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave} isSelected={isSelected} isHover={isHover}>
            About
          </AboutLink>
        </nav>
        <nav className='nav-mobile-item'>
          <PortfolioLink to="/portfolio" onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave} isSelected={isSelected} isHover={isHover}>
            Portfolio
          </PortfolioLink>
        </nav>
        <nav className='nav-mobile-item'>
          <ContactLink to="/contact" onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={handleMouseLeave} isSelected={isSelected} isHover={isHover}>
            Contact
          </ContactLink>
        </nav>
      </div>
    </ResponsiveNav>
  );
};

export default Navbar;
