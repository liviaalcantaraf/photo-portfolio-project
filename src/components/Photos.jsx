import React from "react";
import styled from "styled-components";

let Container = styled.div`
  width: 30%;
  height: 50vh;
  margin: 20px 15px;
  border: 2px solid rgb(243, 242, 242);
  border-radius: 10px;
  overflow: hidden;
`;

let Image = styled.img`
  width: 100%;
  transition: all 5s ease;

  :hover {
    transform: translateY(-15%);
  }
`;

const Photos = ({ img }) => {
  return (
    <Container>
      <a href="#" target="_blank" rel="noreferrer">
        <Image src={img} alt="" />
      </a>
    </Container>
  );
};

export default Photos;
