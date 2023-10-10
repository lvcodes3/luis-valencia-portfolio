// dependencies //
import { useState } from "react";
import styled from "styled-components";
// resources //
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.colorMode === "light" ? "white" : "black")};
`;
const ButtonsContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  .mainLinks {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${(props) => (props.colorMode === "light" ? "black" : "white")};
    text-decoration: none;
    transition-duration: 0.5s;

    h1 {
      margin: 0;
    }

    &:hover {
      transform: scale(1.05);
    }

    FaGithub {
      color: ${(props) => (props.colorMode === "light" ? "black" : "white")};
    }
  }
`;
const ProjectsContainer = styled.div`
  margin: 0 auto;
  padding: 0;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .projectLinks {
    font-size: 14px;
    color: ${(props) => (props.colorMode === "light" ? "black" : "white")};
    text-decoration: none;
    transition-duration: 0.5s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Portfolio = ({ colorMode }) => {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <Container colorMode={colorMode}>
      <ButtonsContainer colorMode={colorMode}>
        <a className="mainLinks" href="https://www.linkedin.com/in/luis-valencia-profile" target="_blank" rel="noreferrer">
          <FaLinkedin style={{ color: "blue", width: 50, height: 50, marginRight: 5 }} />
          <h1>LinkedIn</h1>
        </a>

        <a className="mainLinks" href="https://github.com/lvcodes3" target="_blank" rel="noreferrer">
          <FaGithub style={{ width: 50, height: 50, marginRight: 5 }} />
          <h1>GitHub</h1>
        </a>

        <div className="mainLinks"
          onClick={() => {
            if (!showProjects) {
              setShowProjects(true);
            } else {
              setShowProjects(false);
            }
          }}
        >
          <FaCode style={{ color: "red", width: 50, height: 50, marginRight: 5 }} />
          <h1>My Deployed Projects</h1>
        </div>
      </ButtonsContainer>
      {showProjects && (
        <ProjectsContainer colorMode={colorMode}>
          <a className="projectLinks" href="https://scale.fresnostate.edu/scale/login.php" target="_blank" rel="noreferrer">
            <h2>SCALE Web App</h2>
          </a>

          <a className="projectLinks" href="https://todo-app-lvcodes3.vercel.app" target="_blank" rel="noreferrer">
            <h2>Todo Web App (Singly Linked List)</h2>
          </a>
        </ProjectsContainer>
      )}
    </Container>
  );
};

export default Portfolio;
