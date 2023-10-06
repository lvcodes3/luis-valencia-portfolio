// dependencies
import { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { FaCog, FaToggleOff, FaToggleOn } from "react-icons/fa";

// init the modal //
Modal.setAppElement("#root");

// Footer Styling //
const Container = styled.footer`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  border-top: ${props => props.colorMode === "light" ? "1px solid black" : "1px solid white"};

  #textContainer {
    display: flex;
    flex: 1;
    justify-content: center;

    p {
      margin: 0 auto;
      color: white;
      font-size: 13px;
    }
  }
`;
const FooterFaCog = styled(FaCog)`
  color: white;
  font-size: 20px;
  cursor: pointer;
  margin-right: 20px;
  transition-duration: 0.5s;
  &:hover {
    transform: scale(1.05);
  }
`;

// Modal Styling //
const CustomModal = styled(Modal)`
  overlay {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
const ModalContent = styled.div`
  width: 35%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 10px;
  border: 2px solid black;
`;
const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    margin: 0px;
    padding: 5px 0px 5px 0px;
  }
`;
const ModalFaCog = styled(FaCog)`
  color: black;
  font-size: 20px;
  margin-right: 10px;
`;
const ModalBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    margin: 0px 5px 0px 0px;
    padding: 25px 0px 25px 0px;
  }
`;
const ModalFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 55px;
    margin: 5px 0px 5px 0px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 500;
    color: white;
    background-color: red;
    border: none;
    border-radius: 10px;
  }
`;
const CustomFaToggleOff = styled(FaToggleOff)`
  font-size: 20px;
  cursor: pointer;
`;
const CustomFaToggleOn = styled(FaToggleOn)`
  font-size: 20px;
  cursor: pointer;
`;

const Footer = ({ colorMode, changeColorMode }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <Container colorMode={colorMode}>
      <div id="textContainer">
        <p>Copyright © Luis Valencia</p>
      </div>
      <div id="cogContainer">
        <FooterFaCog onClick={openModal} />
      </div>
      <CustomModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Settings Modal"
      >
        <ModalContent>
          <ModalHeader>
            <ModalFaCog />
            <h2>Settings</h2>
          </ModalHeader>
          <ModalBody>
            <p><b>Display Mode:</b></p>
            {
              colorMode === "light"
                ? (
                  <CustomFaToggleOff
                    onClick={() => changeColorMode("dark")}
                  />
                )
                : (
                  <CustomFaToggleOn
                    onClick={() => changeColorMode("light")}
                  />
                )
            }
          </ModalBody>
          <ModalFooter>
            <button onClick={closeModal}>Exit</button>
          </ModalFooter>
        </ModalContent>
      </CustomModal>
    </Container>
  );
};

export default Footer;
