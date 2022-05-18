import React from "react";
import styled from "styled-components";

let Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 50px 80px;
  @media screen and (max-width: 780px) {
    flex-direction: column;
    text-align: center;
    margin-top: 50px;
  }
`;
let Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 780px) {
    width: 100%;
  }
`;
let Image = styled.img`
  border-radius: 15px;
  @media screen and (max-width: 780px) {
    height: 40vh;
  }
`;
let Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 780px) {
    margin-top: 30px;
    width: 100%;
  }
`;
let Title = styled.h1`
  font-size: 50px;
  color: #827397;
  @media screen and (max-width: 780px) {
    font-size: 40px;
  }
`;
let Desc = styled.p`
  font-size: 20px;
  color: #827397;
  margin-top: 30px;
  @media screen and (max-width: 780px) {
    font-size: 15px;
  }
`;

let Break = styled.p`
  margin-top: 13px;
`;

const About = () => {
  return (
    <Container>
      <Left>
        <Image src="https://images.unsplash.com/photo-1607445804560-95f060124720?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80" />
      </Left>
      <Right>
        <Title>About me</Title>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          ducimus ut est expedita harum, sint non sed doloremque recusandae
          quibusdam exercitationem illo numquam hic quisquam quis incidunt magni
          in possimus.
          <Break />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
          voluptates deleniti omnis assumenda minima, similique labore, sunt
          velit voluptate quos voluptatem ex nostrum eveniet reprehenderit
          recusandae exercitationem mollitia corporis amet.
        </Desc>
      </Right>
    </Container>
  );
};

export default About;
