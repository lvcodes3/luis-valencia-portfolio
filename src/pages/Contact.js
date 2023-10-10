// dependencies //
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;
  justify-content: center;
  color: ${(props) => (props.colorMode === "light" ? "black" : "white")};
  background-color: ${(props) => (props.colorMode === "light" ? "white" : "black")};

  #formContainer {
    margin: 0 auto;
    margin-top: 50px;
    width: 450px;
    height: 450px;
    border: ${(props) => (props.colorMode === "light" ? "1px solid black" : "1px solid white")};
    border-radius: 10px;

    h1 {
      margin: 0 auto;
      text-align: center;
      padding: 10px 0px 10px 0px;
      border-bottom: ${(props) => (props.colorMode === "light" ? "1px solid black" : "1px solid white")};
      margin-bottom: 15px;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 16px;

      div {
        display: flex;
        flex-direction: column;
        align-items: center;

        div {
          width: 100%;
          flex-direction: row;

          label {
            text-align: left;
            margin: 10px 0px 0px 0px;
          }
        }
  
        input {
          width: 400px;
          height: 20px;
          margin: 0px 0px 15px 0px;
          border: ${(props) => (props.colorMode === "light" ? "1px solid black" : "1px solid white")};
        }
  
        textarea {
          width: 400px;
          height: 150px;
          margin: 0px 0px 15px 0px;
          border: ${(props) => (props.colorMode === "light" ? "1px solid black" : "1px solid white")};
        }

        input[type="submit"] {
          width: 125px;
          height: 35px;
          cursor: pointer;
          border: none;
          border-radius: 10px;
          color: ${(props) => (props.colorMode === "light" ? "white" : "black")};
          background-color: ${(props) => (props.colorMode === "light" ? "black" : "white")};
          transition-duration: 0.5s;
          &:hover {
            transform: scale(1.05);
          }
        }
      }
    }
  }
`;

const Contact = ({ colorMode }) => {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_10ptcv3",
        "template_x3co0ci",
        form.current,
        "m8qoMr3Hkb0-yAjwv"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent");
          setEmailSent(true);
        },
        (error) => {
          console.log(error.text);
          console.log("Message was not sent");
          setEmailSent(false);
        }
      );
  };

  return (
    <Container colorMode={colorMode}>
      {!emailSent ? (
        <div id="formContainer">
          <h1>Contact Me</h1>
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <div>
                <label><b>Name:</b></label>
              </div>
              <input name="user_name" type="text" maxLength="50" autoFocus required />
            </div>
            <div>
              <div>
                <label><b>Email:</b></label>
              </div>
              <input name="user_email" type="email" maxLength="50" required />
            </div>
            <div>
              <div>
                <label><b>Message:</b></label>
              </div>
              <textarea name="message" maxLength="250" required />
            </div>
            <div>
              <input type="submit" value="Send" />
            </div>
          </form>
        </div>
      ) : (
        <h1>Thank you for your input.</h1>
      )}
    </Container>
  );
};

export default Contact;
