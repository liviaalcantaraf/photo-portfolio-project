import React from "react";
import styled from "styled-components";

let Container = styled.div`
  height: 30px;
`;

let Wrapper = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.782);
  z-index: 20;
  transition: background 0.2s ease-in-out;
`;
let Left = styled.div`
  width: 60%;
`;
let Logo = styled.h1`
  font-weight: bold;
  color: #827397;
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
            <Logo>//AP.</Logo>
          </Left>
          <Right>
            <Menu>
              <MenuItem>Home</MenuItem>
              <MenuItem>About</MenuItem>
              <MenuItem>Portfolio</MenuItem>
              <MenuItem>Contact</MenuItem>
            </Menu>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Navbar;
