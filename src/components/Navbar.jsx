import React from "react";
import styled from "styled-components";
import Profile_img from "../assets/images/kowoon_profile.jpeg";
import { AiOutlineFile, AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsPhone } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="App">
      <StyledNavbar>
        <div className="navWrap">
          <div>
            <img className="profileImg" alt="profile_img" src={Profile_img} />
          </div>
          <h2>KO WOON</h2>
          <section className="menuBar">
            <li>
              <Link to="home" spy={true} smooth={true}>
                <i className="icon">
                  <AiOutlineHome />
                </i>
                <span className="menuDetail"> Home</span>
              </Link>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true}>
                <i className="icon">
                  <BsPerson />{" "}
                </i>
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link to="skills" spy={true} smooth={true}>
                <i className="icon">
                  <FaReact />
                </i>
                <span> Skills</span>
              </Link>
            </li>
            <li>
              <Link to="resume" spy={true} smooth={true}>
                <i className="icon">
                  <AiOutlineFile />
                </i>
                <span>Resume</span>
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                <i className="icon">
                  <FiBookOpen />{" "}
                </i>
                <span>Portfolio</span>
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true}>
                <i className="icon">
                  <BsPhone />
                </i>
                <span>Contact</span>
              </Link>
            </li>
          </section>
          <section>
            <li>
              <span>메인페이지로 이동</span>
            </li>
          </section>
        </div>
      </StyledNavbar>
    </div>
  );
}

export default Navbar;

const StyledNavbar = styled.div`
  animation: fadeInLeft 1s;

  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }

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
    font-size: 1.9em;
  }
  .menuBar {
    font-size: 1.2em;
    line-height: 1.9em;
    text-align: left;
    margin-left: 3em;

    li {
      list-style: none;
    }

    a {
      text-decoration: none;
      color: #aba6a6;
    }
    a:hover {
      span {
        color: white;
      }
      i {
        color: #149ddd;
      }
    }
  }
`;
