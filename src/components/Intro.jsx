import React from "react";
import styled from "styled-components";

let Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
`;
let Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
let Title = styled.h1`
  font-size: 60px;
  width: 50%;
  color: #363062;
`;
let Desc = styled.p`
  width: 50%;
  font-size: 20px;
  margin-top: 20px;
  color: #827397;
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
`;

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Alexa Portland</Title>
        <Desc>Photographer</Desc>
      </Left>
      <Right>
        <Image src="https://images.unsplash.com/photo-1512813498716-3e640fed3f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=424&q=80" />
      </Right>
    </Container>
  );
};

export default Intro;
