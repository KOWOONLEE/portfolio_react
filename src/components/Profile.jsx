import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MainImg from "../assets/images/kowooni_main.jpeg";

function Profile() {
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);
  const typingWord = "Web Developer";

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTitle((prevTitleValue) => {
        let result = prevTitleValue
          ? prevTitleValue + typingWord[count]
          : typingWord[0];
        setCount(count + 1);

        if (count >= typingWord.length) {
          setCount(0);
          setTitle("");
        }

        return result;
      });
    }, 200);

    return () => {
      clearInterval(typingInterval);
    };
  });

  return (
    <div className="App">
      <StyledProfile>
        <div className="profileBackground">
          <img className="mainBackground" alt="background_img" src={MainImg} />
        </div>
        <div className="typingName">
          <h3>KO WOON</h3>
          <h3 className="typingword">
            I'm <span>{title}</span>
          </h3>
        </div>
      </StyledProfile>
    </div>
  );
}

export default Profile;

const StyledProfile = styled.div`
  display: flex;
  width: 80vw;
  height: 100%;
  margin-left: 20%;

  /* position: relative; */

  .profileBackground {
    /* display: inline-block; */
    position: relative;
  }

  .mainBackground {
    display: inline-block;
    position: relative;
    width: 80vw;
    height: 100vh;
    object-fit: cover;

    /* overflow-x: hidden; */
  }

  /* .typing {
    width: 100%;
    height: 100%;
    background-color: gray;
    opacity: 0.5;
    color: white;
    font-size: 3em;
    font-weight: bold;
  } */

  .typingName {
    position: absolute;
    z-index: 2;
    min-width: 300px;
    width: 80vw;
    height: 100vh;
    overflow-x: hidden;

    h3 {
      /* @keyframes cursor {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      } */
    }

    h3 {
      display: fixed;
      position: relative;
      color: white;
      z-index: 99;
      opacity: 1;
      font-size: 4em;
      left: 10vw;
      top: 20vh;
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
  .typingword::after {
    content: "";
    margin-left: 0.6rem;
    border-right: 3px solid white;
    animation: cusor 0.9s infinite steps(2);
  }
`;
