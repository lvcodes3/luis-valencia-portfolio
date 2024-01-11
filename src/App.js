// dependencies
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
//import Navbar from "./components/Navbar";
import ResponsiveNavbar from "./components/ResponsiveNavbar";
import Footer from "./components/Footer";
// pages
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [colorMode, setColorMode] = useState("light");

  useEffect(() => {
    if (localStorage.getItem("ColorMode")) {
      setColorMode(localStorage.getItem("ColorMode"));
    } else {
      localStorage.setItem("ColorMode", colorMode);
    }
  }, [colorMode]);

  const changeColorMode = (newColor) => {
    localStorage.setItem("ColorMode", newColor);
    setColorMode(newColor);
  }

  return (
    <Router>
      <div>
        <ResponsiveNavbar colorMode={colorMode} />
        <Routes>
          <Route path="/" exact element={<Home colorMode={colorMode} />} />
          <Route path="/portfolio" exact element={<Portfolio colorMode={colorMode} />} />
          <Route path="/about" exact element={<About colorMode={colorMode} />} />
          <Route path="/contact" exact element={<Contact colorMode={colorMode} />} />
        </Routes>
        <Footer colorMode={colorMode} changeColorMode={changeColorMode} />
      </div>
    </Router>
  );
}

export default App;
