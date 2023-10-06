// dependencies
import styled from "styled-components";

// assets
import fsImage from "../images/fs.png";
import or2stemImage from "../images/or2stem.jpg";
import codingImage from "../images/coding.webp";

// styled styling //
const Container = styled.div`
  width: 100%;
  height: 100%;
  color: ${props => props.colorMode === "light" ? "black" : "white"};
  background-color: ${props => props.colorMode === "light" ? "white" : "black"};
`;

const EduContainer = styled.div`
  margin-bottom: 30px;

  h1 {
    margin: 0;
    padding: 30px 0 0 30px;
  }
  hr {
    border-color: ${props => props.colorMode === "light" ? "black" : "white"};
  }
`;
const InnerEduContainer = styled.div`
  display: flex;
  justify-content: center;

  #eduContentContainer {
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2, h3 {
      margin: 5px;
    }
    div {
      width: 75%;
      min-width: 75%;
    }
  }
  #eduImageContainer {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const WorkContainer = styled.div`
  margin-bottom: 30px;

  h1 {
    margin: 0;
    padding: 30px 0 0 30px;
  }
  hr {
    border-color: ${props => props.colorMode === "light" ? "black" : "white"};
  }
`;
const InnerWorkContainer = styled.div`
  display: flex;
  justify-content: center;

  .workContentContainer {
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2, h3 {
      margin: 5px;
    }
    div {
      width: 75%;
      min-width: 75%;
      ul {
        margin: 5px;
      }
    }
  }
  .workImageContainer {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const SkillContainer = styled.div`
  h1 {
    margin: 0;
    padding: 30px 0 0 30px;
  }
  hr {
    border-color: ${props => props.colorMode === "light" ? "black" : "white"};
  }
`;
const InnerSkillContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 30px;

  div {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2, ul {
      margin: 0;
    }
  }
`;

const About = ({ colorMode }) => {
  return (
    <Container colorMode={colorMode}>
      <EduContainer colorMode={colorMode}>
        <h1>My Education</h1>
        <hr />
        <InnerEduContainer>
          <div id="eduContentContainer">
            <h2>California State University, Fresno</h2>
            <h3>Bachelors of Science, Computer Science <em>(May 2023)</em></h3>
            <div>
              <p>
                Software Engineering I, Software Engineering II, Web Programming, Computer Security, Data Structures and Algorithms,
                Database Systems, Operating Systems, Internet Networking and Protocols, Simulation, Computer Graphics, etc...
              </p>
            </div>
          </div>
          <div id="eduImageContainer">
            <img
              src={fsImage}
              alt="California State University, Fresno"
              style={{ width: 200, height: 200 }}
            />
          </div>
        </InnerEduContainer>
      </EduContainer>

      <WorkContainer colorMode={colorMode}>
        <h1>My Work Experience</h1>
        <hr />
        <InnerWorkContainer>
          <div className="workImageContainer">
            <img
              src={codingImage}
              alt="Software Engineer"
              style={{ width: 200, height: 120 }}
            />
          </div>
          <div className="workContentContainer">
            <h2>Data Consultants</h2>
            <h3>Software Engineer</h3>
            <h3>07/01/23 - present</h3>
            <div>
              <p>
                Utilizing PHP, JavaScript, HTML, CSS, MySQL, and Windows OS to work on our "Grapevine eF&I" web application
                that is used by multiple vehicle dealerships in the US to sell and log vehicles. Working on a multitude of
                functionalities like: dynamic forms programming (similar to Adobe Sign, but is connected directly to our
                web app), street-level tax rate look up (based on a US address & postal databases), frontend improvements
                to the web app, custom APIs to send data between servers, etc...
              </p>
            </div>
          </div>
        </InnerWorkContainer>
        <br /><br />
        <InnerWorkContainer>
          <div className="workImageContainer">
            <img
              src={or2stemImage}
              alt="OR2STEM"
              style={{ width: 200, height: 101.01 }}
            />
          </div>
          <div className="workContentContainer">
            <h2>California State University, Fresno - On-Ramp To STEM</h2>
            <h3>Fullstack Web Developer</h3>
            <h3>06/13/22 - 07/01/23</h3>
            <div>
              <p>
                Utilized HTML, CSS, JavaScript, PHP, PostgreSQL, and Mac OS to create SCALE, a web app that is currently
                being used by Fresno State's Math Department for a more immersive teaching and learning experience.
                Professors and students connect to SCALE by logging into their school's Canvas LMS, then navigating to
                their enrolled math course and clicking on the SCALE link that would then redirect them and provide it
                with their Canvas credentials needed to authorize the users, set up an ecosystem of classes, users, and
                functionalities based on their roles.
              </p>
            </div>
          </div>
        </InnerWorkContainer>
      </WorkContainer>

      <SkillContainer colorMode={colorMode}>
        <h1>My Skills</h1>
        <hr />
        <InnerSkillContainer>
          <div>
            <h2>Technical:</h2>
            <ul>
              <li>JavaScript, JQuery, AJAX</li>
              <li>TypeScript</li>
              <li>PHP</li>
              <li>Node</li>
              <li>Express</li>
              <li>PostgreSQL, MySQL</li>
              <li>MongoDB</li>
              <li>JSON</li>
              <li>Python</li>
              <li>C++</li>
              <li>React, Redux</li>
              <li>Vue</li>
              <li>HTML</li>
              <li>CSS, Bootstrap, Tailwind</li>
              <li>Full Stack Web Development</li>
              <li>Full Stack Software Development</li>
              <li>Software Development Lifecycle</li>
              <li>Software Architecture</li>
              <li>REST APIs</li>
              <li>JSON Web Tokens</li>
              <li>Agile, Scrum, Waterfall</li>
            </ul>
          </div>
          <div>
            <h2>Software:</h2>
            <ul>
              <li>Visual Studio Code</li>
              <li>Xcode</li>
              <li>Git, GitHub</li>
              <li>Postman</li>
              <li>MAMP</li>
              <li>fileZilla</li>
              <li>Adobe</li>
              <li>Microsoft</li>
              <li>Google</li>
              <li>Jira</li>
            </ul>
          </div>
        </InnerSkillContainer>
      </SkillContainer>
    </Container>
  );
};

export default About;
