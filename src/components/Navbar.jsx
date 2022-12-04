import React from "react";
import styled from "styled-components";
import Profile_img from "../assets/images/kowoon_profile.jpeg";
import { AiOutlineFile, AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsPhone } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";

function Navbar() {
  return (
    <div className="App">
      <StyledNavbar>
        <div>
          <img className="profileImg" alt="profile_img" src={Profile_img} />
        </div>
        <h2>LEE KO WOON</h2>
        <section className="menuBar">
          <p>
            <a href="#home">
              <span className="icon">
                <AiOutlineHome />
              </span>
              <span className="menuDetail"> Home</span>
            </a>
          </p>
          <p>
            <a href="#about">
              <BsPerson /> About
            </a>
          </p>
          <p>
            <a href="#skills">
              <FaReact /> Skills
            </a>
          </p>
          <p>
            <a href="#resume">
              <AiOutlineFile /> Resume
            </a>
          </p>
          <p>
            <a href="#portfolio">
              <FiBookOpen /> Portfolio
            </a>
          </p>
          <p>
            <a href="#contact">
              <BsPhone /> Contact
            </a>
          </p>
        </section>
      </StyledNavbar>
    </div>
  );
}

export default Navbar;

const StyledNavbar = styled.div`
  display: inline-block;
  position: fixed;
  width: 20vw;
  height: 100%;
  text-align: center;
  background-color: black;
  color: white;
  overflow: auto;

  .profileImg {
    width: 40%;
    border-radius: 50%;
    object-fit: cover;
    margin: 50px 0 20px 0;
  }
  h2 {
    font-size: 1.9em;
  }
  .menuBar {
    font-size: 1.2em;
    line-height: 1.9em;
    text-align: left;
    margin-left: 3em;

    a {
      text-decoration: none;
      color: #aba6a6;
    }
  }
`;
