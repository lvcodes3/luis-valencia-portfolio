import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Modal from "react-modal";

import { FaCog, FaBars, FaTimes } from "react-icons/fa";

// initialize the modal //
Modal.setAppElement("#root");

const Navbar = ({ colorMode, changeColorMode }) => {
  const location = useLocation();
  const [isHover, setIsHover] = useState(null);
  const [isSelected, setIsSelected] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleMouseEnter = (idx) => {
    setIsHover(idx);
  };

  const handleMouseLeave = () => {
    setIsHover(null);
  };

  const handleSelectChange = () => {
    let selectElement = document.getElementById("displayModeSelect");
    let selectedOption = selectElement.options[selectElement.selectedIndex];
    let selectedValue = selectedOption.value;
    changeColorMode(selectedValue);
  };

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

  return (
    <nav className="w-full h-[60px] sticky top-0 bg-blue-950 dark:bg-slate-900">
      <div className="w-full h-full md:px-10 px-7 py-4 md:flex justify-between items-center">
        {/* main link */}
        <Link
          to="/"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
          className="ml-6 text-2xl font-semibold duration-500"
          style={{
            color: isSelected === 1 || isHover === 1 ? "white" : "silver"
          }}
        >
          LV
        </Link>

        {/* responsive toggle */}
        <div
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden absolute top-[18px] right-8 cursor-pointer text-3xl text-[silver] hover:text-white duration-500 hover:scale-110"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* navigation links */}
        <div
          className={`md:flex md:items-center md:pb-0 pb-5 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 bg-blue-950 dark:bg-slate-900 ${
            mobileOpen ? "top-14" : "top-[-490px]"
          }`}
        >
          <div className="md:ml-10 md:my-0 my-7 ">
            <Link
              to="/about"
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
              className="text-xl font-medium duration-500"
              style={{
                color: isSelected === 2 || isHover === 2 ? "white" : "silver"
              }}
            >
              About
            </Link>
          </div>
          <div className="md:ml-10 md:my-0 my-7">
            <Link
              to="/portfolio"
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
              className="text-xl font-medium duration-500"
              style={{
                color: isSelected === 3 || isHover === 3 ? "white" : "silver"
              }}
            >
              Portfolio
            </Link>
          </div>
          <div className="md:ml-10 md:my-0 my-7">
            <Link
              to="/contact"
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={handleMouseLeave}
              className="text-xl font-medium duration-500"
              style={{
                color: isSelected === 4 || isHover === 4 ? "white" : "silver"
              }}
            >
              Contact
            </Link>
          </div>
          <div className="md:ml-10 md:my-0 my-7">
            <FaCog
              onClick={() => setModalIsOpen(true)}
              className="text-xl text-[silver] font-medium duration-500 cursor-pointer hover:text-white"
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Settings Modal"
        className="bg-black bg-opacity-50"
      >
        <div className="w-[250px] absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center bg-slate-200 border-2 border-black rounded-lg">
          <div className="w-full py-2 flex justify-center items-center gap-x-2 border-b-2 border-black">
            <FaCog className="text-black text-xl" />
            <h2 className="text-black text-lg font-semibold">Settings</h2>
            <button
              onClick={() => setModalIsOpen(false)}
              className="w-[25px] absolute right-3 flex justify-center items-center text-white bg-red-500 cursor-pointer border-none rounded-lg"
            >
              X
            </button>
          </div>
          <div className="w-full pt-4 pb-6 flex flex-col justify-center items-center gap-y-2">
            <p className="text-black font-bold">Display Mode</p>
            <select
              id="displayModeSelect"
              value={colorMode}
              onChange={handleSelectChange}
              className="cursor-pointer rounded-lg"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
        </div>
      </Modal>
    </nav>
  );
};

export default Navbar;
