// dependencies //
import { Link } from "react-router-dom";
import styled from "styled-components";
// resources //
import luis from "../images/luis.jpg";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: ${props => props.colorMode === "light" ? "white" : "black"};
`;
const SubContainer = styled.div`
  width: 60%;
  padding: 5px;
  border: ${props => props.colorMode === "light" ? "1px solid black" : "1px solid white"};
  border-radius: 10px;
  background-color: silver;
`;
const LuisContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  img {
    width: 342.45px;
    height: 439.95px;
    border-radius: 50%;
  }

  div {
    h1 {
      padding: 0;
      text-align: center;
      font-size: 64px;
      font-weight: 900;
      margin-bottom: 10px;
    }
    p {
      font-size: 18px;
      text-align: center;
    }
  }
`;
const LinkContainer = styled.div`
  padding-top: 15px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const StyledLink = styled(Link)`
  width: 125px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  color: ${props => props.colorMode === "light" ? "white" : "black"};
  background-color: ${props => props.colorMode === "light" ? "black" : "white"};
  transition-duration: 0.5s;
  &:hover {
    transform: scale(1.05);
  }
`;

const Home = ({ colorMode }) => {
  return (
    <Container colorMode={colorMode}>
      <SubContainer colorMode={colorMode}>
        <LuisContainer>
          <img src={luis} alt="Luis Valencia" />
          <div>
            <h1>Luis Valencia</h1>
            <p>Full-Stack Software Engineer / Web Developer</p>
          </div>
        </LuisContainer>
        <LinkContainer>
          <StyledLink to="/about" colorMode={colorMode}>
            More About Me
          </StyledLink>
          <StyledLink to="/portfolio" colorMode={colorMode}>
            My Work
          </StyledLink>
        </LinkContainer>
      </SubContainer>
    </Container>
  );
};

export default Home;
