import React from "react";
import styled from "styled-components";
import { photos } from "../data";
import Photos from "./Photos";

let Container = styled.div`
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
let Texts = styled.div`
  width: 65%;
`;
let Title = styled.h1`
  font-size: 50px;
  color: #4d4c7d;
`;
let Desc = styled.p`
  margin: 20px 0px;
  color: #827397;
`;
let Gallery = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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

      <Gallery>
        {photos.map((item) => (
          <Photos key={item.id} img={item.img} />
        ))}
      </Gallery>
    </Container>
  );
};

export default Portfolio;
