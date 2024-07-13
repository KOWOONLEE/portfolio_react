import React from "react";
import styled from "styled-components";
import ReactTypingEffect from "react-typing-effect";
import Profile_img from "../assets/images/kowoon_profile.jpeg";
import { AiOutlineFile, AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { BsList } from "react-icons/bs";
import { Link } from "react-scroll";
import { useState } from "react";

function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);

  const handleMobile = () => {
    setMobileNav(!mobileNav);
  };
  return (
    <div className="navbarMain">
      <StyledNavbar>
        <div className="navWrap">
          <div className="profileImgWrap">
            <div>
              <img className="profileImg" alt="profile_img" src={Profile_img} />
            </div>
            <h2>KO WOON</h2>
            <h3>Web developer</h3>
          </div>
          <div className="menuBarWrap">
            <section className="menuBar">
              <li>
                <Link to="home" spy={true} smooth={true} activeClass="active">
                  <i className="icon">
                    <AiOutlineHome />
                  </i>
                  <span className="menuDetail"> Home</span>
                </Link>
              </li>
              <li>
                <Link to="about" spy={true} smooth={true} activeClass="active">
                  <i className="icon">
                    <BsPerson />{" "}
                  </i>
                  <span> About</span>
                </Link>
              </li>
              <li>
                <Link to="skills" spy={true} smooth={true} activeClass="active">
                  <i className="icon">
                    <FaReact />
                  </i>
                  <span> Skills</span>
                </Link>
              </li>
              <li>
                <Link to="resume" spy={true} smooth={true} activeClass="active">
                  <i className="icon">
                    <AiOutlineFile />
                  </i>
                  <span> Resume</span>
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
                  <span> Portfolio</span>
                </Link>
              </li>
              <div className="navTypingEffect">
                <span>Made </span>
                <ReactTypingEffect
                  className="typingEffect"
                  speed="100"
                  eraseSpeed="100"
                  eraseDelay="1500"
                  text={["with React", "by kowoon"]}
                />
              </div>

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
        </div>
      </StyledNavbar>
      <StyledNavbarMobile>
        <div onClick={handleMobile} className="navButton">
          {!mobileNav ? (
            <i className="icon">
              <BsList />
            </i>
          ) : (
            <i className="icon">
              <AiOutlineClose />
            </i>
          )}
        </div>
        {mobileNav ? (
          <div className="mobileNavWrap">
            <div className="navWrap">
              <div>
                <img
                  className="profileImg"
                  alt="profile_img"
                  src={Profile_img}
                />
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
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    activeClass="active"
                  >
                    <i className="icon">
                      <BsPerson />{" "}
                    </i>
                    <span> ABOUT</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="skills"
                    spy={true}
                    smooth={true}
                    activeClass="active"
                  >
                    <i className="icon">
                      <FaReact />
                    </i>
                    <span> SKILLS</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="resume"
                    spy={true}
                    smooth={true}
                    activeClass="active"
                  >
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
                <div className="navTypingEffect">
                  <span>Made </span>
                  <ReactTypingEffect
                    className="typingEffect"
                    speed="100"
                    eraseSpeed="100"
                    eraseDelay="1500"
                    text={["with React", "by kowoon"]}
                  />
                </div>
              </section>
            </div>
          </div>
        ) : (
          <></>
        )}
      </StyledNavbarMobile>
    </div>
  );
}

export default Navbar;

const StyledNavbar = styled.div`
  font-family: "Ubuntu", sans-serif;
  animation: fadeInLeft 1s;
  /* box-shadow: 10px 5px 5px gray; */

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
  background-color: #151b28;
  text-align: center;
  color: white;
  overflow: auto;

  .profileImgWrap {
    width: 80%;
    height: 100%;
    margin: 5vh auto;
    padding: 30px 5px;
    background-color: #27314a;
    border-radius: 20px;
  }

  .profileImg {
    width: 45%;
    border-radius: 50%;
    object-fit: cover;
    /* margin: 50px 0 20px 0; */
    box-shadow: 11px 3px 10px rgba(174, 197, 240, 0.2);
  }
  h2 {
    font-size: 1.9em;
    font-weight: 400;
  }
  h3 {
    width: 70%;
    margin: auto;
    padding: 10px;
    border-radius: 30px;
    box-shadow: 4px 5px 10px gray;
    background-color: #151b28;
    letter-spacing: 1px;
    font-size: 1.2em;
    font-weight: 300;
  }

  .menuBarWrap {
    display: flex;
    justify-content: center;
  }
  .menuBar {
    justify-content: center;
    font-size: 1.3em;
    line-height: 1.9em;
    text-align: left;
    /* margin-top: 10px; */

    li a {
      display: flex;
      letter-spacing: 2px;
    }
    li a .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 15px;
    }
    li {
      display: flex;
      list-style: none;
      line-height: 2.5em;
    }

    a {
      background: linear-gradient(#eaeae7 0 80%);
      background-size: 0 1px;
      background-repeat: no-repeat;
      transition: background-size 0.3s;
      background-position: center calc(100% + 3px);
      text-decoration: none;
      font-size: 1.2em;
      color: #cfcbcb;

      span {
        font-weight: 300;
      }
    }
    a.active {
      span {
        color: #149ddd;
      }
      i {
        color: #149ddd;
      }
    }

    a:hover {
      cursor: pointer;
      font-size: 1.2em;
      background-size: 100% 5px;

      span {
        color: white;
      }
      i {
        color: #149ddd;
      }
    }
  }
  .navTypingEffect {
    position: absolute;
    bottom: 30px;
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
      font-size: 28px;
      color: #fff;
      line-height: 0;
    }
  }

  .mobileNavWrap {
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
    width: 40vw;
    height: 100%;
    text-align: center;
    background-color: #151b28;
    color: white;
  }

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
    width: 80vw;
    font-size: 1em;
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
        color: #149ddd;
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
  .navTypingEffect {
    position: absolute;
    bottom: 30px;
  }
  .typingEffect {
    color: #149ddd;
  }
`;
