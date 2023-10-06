// dependencies
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 50px;
  color: ${props => props.colorMode === "light" ? "black" : "white"};
  background-color: ${props => props.colorMode === "light" ? "white" : "black"};

  #mainHeader {
    margin: 0 auto;
    padding: 0;
    text-align: center;
    font-size: 64px;
    font-weight: 900;
    margin-bottom: 10px;
  }
  #subHeader {
    margin: 0 auto;
    padding: 0;
    text-align: center;
    font-size: 54px;
    font-weight: 900;
    margin-bottom: 10px;
  }
  div {
    margin: 0 auto;
    width: 50%;
    min-width: 50%;
  }
`;

const Home = ({ colorMode }) => {
  return (
    <Container colorMode={colorMode}>
      <h1 id="mainHeader">Hello, I'm Luis Valencia!</h1>
      <h1 id="subHeader">I'm a Software Engineer!</h1>
      <div>
        <p>
          I have my Bachelors in Computer Science from California State University, Fresno.
          I have about 2-3 years of experience in Software Development & Web Development.
          I love learning and developing the world of tomorrow.
        </p>
      </div>
    </Container>
  );
};

export default Home;
