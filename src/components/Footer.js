import { useState } from "react";
import Modal from "react-modal";

import { FaCog } from "react-icons/fa";

// initialize the modal //
Modal.setAppElement("#root");

const Footer = ({ colorMode, changeColorMode }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSelectChange = () => {
    let selectElement = document.getElementById("displayModeSelect");
    let selectedOption = selectElement.options[selectElement.selectedIndex];
    let selectedValue = selectedOption.value;
    changeColorMode(selectedValue);
  };

  return (
    <footer className="w-full h-[60px] flex justify-between items-center bg-blue-950 dark:bg-slate-900">
      <div className="flex flex-1 justify-center">
        <p className="text-white">Copyright © Luis Valencia</p>
      </div>
      <div>
        <FaCog
          onClick={() => setModalIsOpen(true)}
          className="mr-5 text-white text-xl cursor-pointer hover:scale-105"
        />
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
    </footer>
  );
};

export default Footer;
