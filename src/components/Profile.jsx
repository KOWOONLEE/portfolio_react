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
    }, 300);

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
          <h3>
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
  width: 80%;
  height: 100%;
  margin-left: 20%;
  overflow-x: hidden;
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
    /* display: flex;
    width: 79vw;
    position: absolute;
    height: 100vh;

    font-size: 3em;
    opacity: 0.4;
    top: 6px;
    left: 20%;
    z-index: 2; */

    h3 {
      /* margin: 0 0 10px 0;
      font-size: 64px;
      font-weight: 700;
      line-height: 56px;
      color: #fff; */
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
      position: relative;
      color: black;
      z-index: 999;
      opacity: 1;
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
    /* top: 0; */
    /* left: 0; */
    right: 0;
    z-index: 1;
  }
`;
