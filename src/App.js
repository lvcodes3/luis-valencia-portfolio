import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
  };

  return (
      <Router>
        <div className={colorMode}>
          <Navbar colorMode={colorMode} changeColorMode={changeColorMode} />
          <Routes>
            <Route 
              path="/" 
              exact 
              element={<Home />} 
            />
            <Route
              path="/about"
              exact
              element={<About />}
            />
            <Route
              path="/portfolio"
              exact
              element={<Portfolio />}
            />
            <Route
              path="/contact"
              exact
              element={<Contact />}
            />
          </Routes>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
