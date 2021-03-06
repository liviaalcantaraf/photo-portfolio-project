import styled from "styled-components";

let Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;

  @media screen and (max-width: 780px) {
    flex-direction: column;
    margin-top: 100px;
    width: 100%;
  }
`;
let Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 780px) {
    align-items: center;
  }
`;
let Title = styled.h1`
  font-size: 70px;
  width: 60%;

  color: #827397;

  @media screen and (max-width: 780px) {
    font-size: 60px;
    text-align: center;
  }
`;

let Subtitle = styled.p`
  width: 60%;
  font-size: 16px;
  margin-top: 5px;
  color: #827397;
  @media screen and (max-width: 780px) {
    font-size: 15px;
    width: 100%;
    position: relative;
    top: 380px;
    left: 170px;
  }
`;

let Desc = styled.div`
  width: 60%;
  font-size: 16px;
  margin-top: 5px;
  color: #827397;
  @media screen and (max-width: 780px) {
    display: none;
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
  @media screen and (max-width: 780px) {
    position: relative;
    left: 60px;
    width: 200%;
    margin-top: -30px;
  }
`;

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Alexa Portland</Title>
        <Desc>Working with amazing moments</Desc>
        <Subtitle>Photographer</Subtitle>
      </Left>
      <Right>
        <Image src="https://images.unsplash.com/photo-1512813498716-3e640fed3f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=424&q=80" />
      </Right>
    </Container>
  );
};

export default Intro;
