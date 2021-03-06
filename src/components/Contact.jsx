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
  @media screen and (max-width: 780px) {
    flex-direction: column;
    padding: 0px 50px;
  }
`;
let Left = styled.div`
  flex: 1;
`;
let Title = styled.h1`
  font-size: 50px;
  width: 100%;
  color: #827397;
  @media screen and (max-width: 780px) {
    font-size: 35px;
  }
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
  @media screen and (max-width: 780px) {
    margin: 20px 0px;
    width: 100%;
  }
`;
let IconMail = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0px;
  font-weight: 300;
  width: 70%;
  @media screen and (max-width: 780px) {
    margin: 20px 0px;
    width: 100%;
  }
`;
let IconAddress = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0px;
  font-weight: 300;
  width: 70%;
  @media screen and (max-width: 780px) {
    margin: 20px 0px;
    width: 100%;
  }
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
  @media screen and (max-width: 780px) {
    margin-top: -20px;
    display: flex;
    flex-wrap: wrap;
  }
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
  background-color: #827397;
  color: white;
  font-weight: 500;
  cursor: pointer;
  border-radius: 3px;
`;

let Coded = styled.a`
  text-decoration: none;
  display: block;
  text-align: center;
  position: relative;
  top: 150px;
  color: #827397;
  font-size: 12px;
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
              <ImagePhone src={Phone} alt="" />
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
      <Coded href="https://github.com/liviaalcantaraf/photo-portfolio-project">
        Open-souce code by L??via A.
      </Coded>
    </Container>
  );
};
