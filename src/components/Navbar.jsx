import React from "react";
import styled from "styled-components";
import ReactTypingEffect from "react-typing-effect";
import Profile_img from "../assets/images/kowoon_profile.jpeg";
import { AiOutlineFile, AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";
import { Link } from "react-scroll";
import { BsList } from "react-icons/bs";

function Navbar() {
  return (
    <div className="navbarMain">
      <StyledNavbar>
        <div className="navWrap">
          <div>
            <img className="profileImg" alt="profile_img" src={Profile_img} />
          </div>
          <h2>KO WOON</h2>
          <section className="menuBar">
            <li>
              <Link to="home" spy={true} smooth={true} activeClass="active">
                <i className="icon">
                  <AiOutlineHome />
                </i>
                <span className="menuDetail"> HOME</span>
              </Link>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true} activeClass="active">
                <i className="icon">
                  <BsPerson />{" "}
                </i>
                <span> ABOUT</span>
              </Link>
            </li>
            <li>
              <Link to="skills" spy={true} smooth={true} activeClass="active">
                <i className="icon">
                  <FaReact />
                </i>
                <span> SKILLS</span>
              </Link>
            </li>
            <li>
              <Link to="resume" spy={true} smooth={true} activeClass="active">
                <i className="icon">
                  <AiOutlineFile />
                </i>
                <span> RESUME</span>
              </Link>
            </li>
            <li>
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                activeClass="active"
              >
                <i className="icon">
                  <FiBookOpen />{" "}
                </i>
                <span> PORTFOLIO</span>
              </Link>
            </li>
            <p>
              <span>Made </span>
              <ReactTypingEffect
                className="typingEffect"
                speed="100"
                eraseSpeed="100"
                eraseDelay="1500"
                text={["with React", "by kowoon"]}
              />
            </p>

            {/* <li>
            <Link to="contact" spy={true} smooth={true} activeClass="active">
              <i className="icon">
                <BsPhone />
              </i>
              <span> CONTACT</span>
            </Link>
          </li> */}
          </section>
        </div>
      </StyledNavbar>
      <StyledNavbarMobile>
        <div className="navButton">
          <i className="icon">
            <BsList />
          </i>
        </div>
      </StyledNavbarMobile>
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
    width: 45%;
    border-radius: 50%;
    object-fit: cover;
    margin: 50px 0 20px 0;
  }
  h2 {
    font-size: 1.9em;
  }
  .menuBar {
    font-size: 1.3em;
    line-height: 1.9em;
    text-align: left;
    margin-left: 3em;

    li {
      list-style: none;
      line-height: 2.5em;
    }

    a {
      text-decoration: none;
      color: #aba6a6;
    }
    a.active {
      font-weight: bold;
      span {
        color: pink;
      }
      i {
        color: #149ddd;
      }
    }

    a:hover {
      cursor: pointer;
      font-size: 1.2em;
      span {
        color: white;
      }
      i {
        color: #149ddd;
      }
    }
  }
  .typingEffect {
    color: #149ddd;
  }

  @media screen and (max-width: 768px) {
    display: none;
    .navWrap {
      display: none;
    }
  }
`;

const StyledNavbarMobile = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    position: fixed;
    width: 100%;
    z-index: 999;

    .navButton {
      display: flex;
      right: 15px;
      bottom: 15px;
      z-index: 999;
      align-items: center;
      justify-content: center;
      background: black;
      width: 40px;
      height: 40px;
      border: none;
      cursor: pointer;
    }
    .icon {
      display: flex;
      font-size: 28px;
      color: #fff;
      line-height: 0;
    }
  }
`;
