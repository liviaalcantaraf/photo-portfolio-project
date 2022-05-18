import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import { useState } from "react";

let Container = styled.div`
  height: 30px;
  @media screen and (max-width: 760px) {
    display: flex;
    justify-content: space-between;
  }
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
  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;
let Logo = styled.h1`
  font-weight: bold;
  color: #827397;
  @media screen and (max-width: 780px) {
    display: none;
  }
`;
let Right = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 760px) {
    width: 50%;
  }
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

let HambToggle = styled.div`
  display: none;
  z-index: 6;

  @media screen and (max-width: 760px) {
    display: fixed;
    position: relative;
    right: 260px;
    padding-top: 10px;
    margin-left: 10px;
    z-index: 6;
  }
`;

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Logo>//AP.</Logo>
          </Left>
          <HambToggle onClick={toggleHamburger}>
            <Hamburger isOpen={hamburgerOpen} />
          </HambToggle>
          <Right>
            <Menu className="navigation">
              <ul>
                <Link to="/">
                  <MenuItem>Home</MenuItem>
                </Link>
                <Link to="/About">
                  <MenuItem>About</MenuItem>
                </Link>
                <Link to="/Portfolio">
                  <MenuItem>Portfolio</MenuItem>
                </Link>
                <Link to="/Contact">
                  <MenuItem>Contact</MenuItem>
                </Link>
              </ul>
            </Menu>
          </Right>
        </Wrapper>
      </Container>
      <style jsx>{`
        @media (max-width: 767px) {
          .navigation ul {
            display: ${hamburgerOpen ? "inline" : "none"};
            position: relative;
            right: 160px;
            height: 40vh;
            width: 50%;
            margin-top: 50px;
            position: fixed;
            border-radius: 4px;
            background: rgba(255, 255, 255, 0.782);
            padding: 10px 22px;
            outline: none;
            border: none;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            text-decoration: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
