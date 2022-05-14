import React from "react";
import styled from "styled-components";

let Container = styled.div`
  height: 30px;
`;

let Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
let Left = styled.div`
  width: 60%;
`;
let Logo = styled.h1`
  font-weight: bold;
  color: #363062;
`;
let Right = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
let Menu = styled.ul`
  display: flex;
  list-style: none;
`;
let MenuItem = styled.li`
  display: inline-block;
  padding-bottom: 0.25rem;
  position: relative;
  margin-right: 80px;
  font-size: 18px;
  font-weight: bold;
  color: #363062;
  cursor: pointer;

  ::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: #e9d5da;
    transition: width 0.25s ease-out;
  }
  :hover::before {
    width: 100%;
  }
`;

const Navbar = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Logo>Alec P.</Logo>
          </Left>
          <Right>
            <Menu>
              <MenuItem>Home</MenuItem>
              <MenuItem>Portfolio</MenuItem>
              <MenuItem>About Me</MenuItem>
              <MenuItem>Contact</MenuItem>
            </Menu>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Navbar;
