import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { photos } from "../data";
import Photos from "./Photos";

let Container = styled.div`
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 780px) {
    padding: 10px;
    margin-top: 25px;
  }
`;
let Texts = styled.div`
  width: 65%;
`;
let Title = styled.h1`
  font-size: 50px;
  color: #827397;
  @media screen and (max-width: 780px) {
    font-size: 40px;
  }
`;
let Desc = styled.p`
  margin: 20px 0px;
  color: #827397;
  @media screen and (max-width: 780px) {
    font-size: 15px;
  }
`;
let Gallery = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 780px) {
    position: relative;
    left: 70px;
  }
`;

const Portfolio = () => {
  return (
    <Container>
      <Texts>
        <Title>My portfolio</Title>
        <Desc>
          You can meet my work a little bit here and think about our next
          amazing project together.
        </Desc>
      </Texts>
      <Link to="Portfolio">
        <Gallery>
          {photos.map((item) => (
            <Photos key={item.id} img={item.img} />
          ))}
        </Gallery>
      </Link>
    </Container>
  );
};

export default Portfolio;
