import React, { useContext } from "react";
import Phone from "../img/phone.png";
import Email from "../img/email.png";
import Address from "../img/address.png";
import styled from "styled-components";
import { ThemeContext } from "../context";

let Container = styled.div`
  height: 100vh;
  position: relative;
`;
let Background = styled.div`
  width: 20px;
  height: 100%;
  background-color: #827397;
  position: absolute;
`;
let Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
let Left = styled.div`
  flex: 1;
`;
let Title = styled.h1`
  font-size: 50px;
  width: 100%;
  color: #363062;
`;
let Info = styled.div`
  color: #827397;
`;
let IconPhone = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0px;
  font-weight: 300;
  width: 70%;
`;
let IconMail = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0px;
  font-weight: 300;
  width: 70%;
`;
let IconAddress = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0px;
  font-weight: 300;
  width: 70%;
`;
let ImagePhone = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 20px;
`;
let ImageMail = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 20px;
`;
let ImageAddress = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 20px;
`;

let Right = styled.div`
  flex: 1;
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  justify-content: left;
`;

let Form = styled.form`
  margin-top: 50px;
`;
let InputName = styled.input`
  width: 50%;
  height: 50px;
  border: none;
  border-bottom: 1px solid black;
  margin: 10px 0px;
  font-size: 14px;
  padding-left: 10px;
`;
let InputSubject = styled.input`
  width: 50%;
  height: 50px;
  border: none;
  border-bottom: 1px solid black;
  margin: 10px 0px;
  font-size: 14px;
  padding-left: 10px;
`;
let InputEmail = styled.input`
  width: 50%;
  height: 50px;
  border: none;
  border-bottom: 1px solid black;
  margin: 10px 0px;
  font-size: 14px;
  padding-left: 10px;
`;
let TextArea = styled.textarea`
  width: 100%;
  margin: 10px 0px;
  font-size: 14px;
  padding-left: 10px;
`;
let Button = styled.button`
  border: none;
  padding: 15px;
  background-color: #4d4c7d;
  color: white;
  font-weight: 500;
  cursor: pointer;
  border-radius: 3px;
`;

export const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("I'm looking foward to see our project together. See you soon!");
  };

  return (
    <Container>
      <Background></Background>
      <Wrapper>
        <Left>
          <Title>Let's discuss your project?</Title>
          <Info>
            <IconPhone>
              <ImagePhone alt="" className="c-icon" />
              +49 176 12345678
            </IconPhone>
            <IconMail>
              <ImageMail src={Email} alt="" />
              contact@alexaportland.com
            </IconMail>
            <IconAddress>
              <ImageAddress src={Address} alt="" />
              Berlin, Germany
            </IconAddress>
          </Info>
        </Left>
        <Right>
          <Form onSubmit={handleSubmit}>
            <InputName
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <InputSubject
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <InputEmail
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <TextArea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <Button>Submit</Button>
          </Form>
        </Right>
      </Wrapper>
    </Container>
  );
};
