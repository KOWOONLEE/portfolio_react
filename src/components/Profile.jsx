import styled from "styled-components";
import ReactTypingEffect from "react-typing-effect";
import MainImg from "../assets/images/kowooni_main.jpeg";

function Profile() {
  return (
    <div id="home" className="App" style={{ width: "99vw" }}>
      <StyledProfile>
        <div className="profileBackground">
          <img className="mainBackground" alt="background_img" src={MainImg} />
        </div>
        <div className="typingName">
          <h2>LEE KO WOON</h2>
          <h3 className="typingword">
            <span>I'm </span>
            <ReactTypingEffect
              speed="150"
              eraseSpeed="100"
              eraseDelay="2000"
              text={["Web Developer.", "going to be a person who grows up!"]}
            />
          </h3>
        </div>
      </StyledProfile>
    </div>
  );
}

export default Profile;

const StyledProfile = styled.div`
  font-family: "Ubuntu", sans-serif;
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

  display: flex;
  height: 100%;
  margin-left: 20%;

  animation: fadeInLeft 1s;

  .profileBackground {
    display: inline-block;

    width: 80vw;
    /* z-index: -1; */
  }

  .mainBackground {
    display: inline-block;

    width: 80vw;
    height: 100vh;
    object-fit: cover;
  }

  .typingName {
    position: absolute;
    z-index: 0;
    width: 80vw;
    height: 100vh;
    overflow-x: hidden;

    h2 {
      display: fixed;
      position: relative;
      color: white;
      z-index: 99;
      opacity: 1;
      font-size: 4.5em;
      left: 10vw;
      top: 28vh;
    }

    h3 {
      display: fixed;
      position: relative;
      color: white;
      z-index: 99;
      opacity: 1;
      font-size: 3em;
      left: 10vw;
      top: 25vh;
    }
    h3::after {
      content: "";
      animation: cursor 0.7s infinite;
    }
  }
  .typingName::before {
    display: block;
    content: "";
    width: 100%;
    height: 100vh;
    background: rgba(5, 13, 24, 0.3);
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
  /* .typingword::after {
    content: "";
    margin-left: 0.6rem;
    border-right: 3px solid white;
    animation: cusor 0.9s infinite steps(2);
  } */
  .typingword span {
    padding-bottom: 4px;
    letter-spacing: 1px;
    border-bottom: 4px solid #149ddd;
  }

  @media screen and (max-width: 1200px) {
    #home {
      background-attachment: fixed;
    }
  }

  @media screen and (max-width: 768px) {
    display: flex;
    margin-left: 10%;

    .mainBackground {
      background-size: cover;
      background-position: left;
    }

    .profileBackground {
      width: 100%;
      background-size: cover;
      background-position: left;
    }
    .typingName {
      display: inline-block;
      font-size: 10px;
      line-height: 30px;
    }
    .typingword {
      width: 80%;
      font-size: 7px;
      line-height: 30px;
      margin-bottom: 30px;
    }
  }
`;
