import React from "react";
import styled from "styled-components";

let Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
let Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 480px) {
    height: 50%;
  }
`;
let Title = styled.h1`
  font-size: 70px;
  width: 60%;
  color: #827397;

  @media screen and (max-width: 480px) {
    font-size: 50px;
    width: 50%;
  }
`;

let Subtitle = styled.p`
  width: 60%;
  font-size: 16px;
  margin-top: 5px;
  color: #827397;
  @media screen and (max-width: 480px) {
    font-size: 12px;
    width: 60%;
  }
`;
let Right = styled.div`
  width: 30%;
`;
let Image = styled.img`
  width: 100%;
  position: relative;
  display: flex;
  top: 50px;
  border-radius: 15px;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Alexa Portland</Title>
        <Subtitle>Photographer | Working with amazing moments</Subtitle>
      </Left>
      <Right>
        <Image src="https://images.unsplash.com/photo-1512813498716-3e640fed3f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=424&q=80" />
      </Right>
    </Container>
  );
};

export default Intro;
