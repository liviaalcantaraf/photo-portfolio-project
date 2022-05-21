import styled from "styled-components";
import { Link } from "react-router-dom";

let Container = styled.div`
  width: 30%;
  height: 50vh;
  margin: 20px 15px;
  border: 2px solid rgb(243, 242, 242);
  border-radius: 10px;
  overflow: hidden;
  @media screen and (max-width: 780px) {
    width: 60%;
    height: 25vh;
    align-items: center;
  }
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
      <Link to="Portfolio">
        <a href="#" target="_blank" rel="noreferrer">
          <Image src={img} alt="" />
        </a>
      </Link>
    </Container>
  );
};

export default Photos;
