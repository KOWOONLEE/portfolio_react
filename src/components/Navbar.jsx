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
        <h2>KO WOON</h2>
        <section className="menuBar">
          <p>
            <AiOutlineHome /> Home
          </p>
          <p>
            <BsPerson /> About
          </p>
          <p>
            <FaReact /> Skills
          </p>
          <p>
            <AiOutlineFile /> Resume
          </p>
          <p>
            <FiBookOpen /> Portfolio
          </p>
          <p>
            <BsPhone /> Contact
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
  width: 20%;
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
    font-size: 1.8em;
  }
  .menuBar {
    font-size: 1.1em;
    line-height: 1.9em;
    text-align: left;
    margin-left: 3em;
  }
`;
