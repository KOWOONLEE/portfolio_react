import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const DetailNav = () => {
  const navigate = useNavigate();
  const [firstHover, setFirstHover] = useState("");
  const [secondHover, setSecondHover] = useState("");
  const [thirdHover, setThirdHover] = useState("");
  const [fourthHover, setFourthHover] = useState("");

  return (
    <StyledNav>
      <div className="projectNav">
        <div
          className="projectDetailword"
          onClick={() => {
            navigate("/");
          }}
        >
          <h2> PROJECT DETAILS</h2>
        </div>
        <div className="middleMenu">
          <span
            onMouseEnter={() => {
              setFirstHover(true);
            }}
            onMouseLeave={() => {
              setFirstHover(false);
            }}
            onClick={() => navigate("/project/first")}
          >
            {" "}
            first
          </span>
          <span
            onMouseEnter={() => {
              setSecondHover(true);
            }}
            onMouseLeave={() => {
              setSecondHover(false);
            }}
            onClick={() => navigate("/project/second")}
          >
            second
          </span>
          <span
            onMouseEnter={() => {
              setThirdHover(true);
            }}
            onMouseLeave={() => {
              setThirdHover(false);
            }}
            onClick={() => navigate("/project/third")}
          >
            third
          </span>
          <span
            onMouseEnter={() => {
              setFourthHover(true);
            }}
            onMouseLeave={() => {
              setFourthHover(false);
            }}
            onClick={() => navigate("/project/fourth")}
          >
            fourth
          </span>
        </div>
        <div className="sideMenu">
          <a href="/">Main Page로 이동</a> <span>/ Portfolio Details </span>
        </div>
      </div>
      <Divhover>
        {firstHover ? (
          <div className="first">
            <span> Hola - 스터디모집 커뮤니케이션 사이트 제작</span>
          </div>
        ) : (
          ""
        )}
        {secondHover ? (
          <div className="first">
            <span> 일차 - 카페 모바일 웹 사이트 제작</span>
          </div>
        ) : (
          ""
        )}
        {thirdHover ? (
          <div className="first">
            <span> Mini 프로젝트 - 오디오플레이어 제작</span>
          </div>
        ) : (
          ""
        )}
        {fourthHover ? (
          <div className="first">
            <span> Mini 프로젝트 - 병원예약 프로그램</span>
          </div>
        ) : (
          ""
        )}
      </Divhover>
    </StyledNav>
  );
};
export default DetailNav;

const StyledNav = styled.div`
  .projectDetailword {
    cursor: pointer;
  }
  .projectNav {
    display: flex;
    width: 90%;
    height: 10vh;
    /* background-color: #f0eeee; */
    background-color: black;
    align-items: center;
    margin: 0 auto;
    padding: 0 20px 0 20px;
    box-shadow: 0 5px 5px -4px gray;
    justify-content: space-between;

    h2 {
      /* font-family: "Kanit", sans-serif; */
      font-size: 1.7em;
      font-weight: 600;
      color: white;
      text-shadow: 1px 1px 1px #205878;
    }
  }
  .middleMenu {
    color: white;

    span {
      font-size: 1.2em;
      font-weight: bold;
      margin-right: 40px;
    }
    span:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  .sideMenu {
    font-size: 1.2em;

    a {
      text-decoration: none;
      color: white;
      font-weight: bold;
    }
    a:hover {
      text-decoration: underline;
    }
    span {
      color: #d9d2d2;
    }
  }
`;
const Divhover = styled.div`
  height: 20px;
  /* background-color: blue; */
  color: black;
  transition: top 1s ease-in; // trasition 으로 top 이동시 자연스럽게 만들어 주자
  top: 20px; // 호버메시지의 원래 위치

  .first {
    display: flex;
    background-color: rgb(0, 0, 0, 0.5);
    color: white;
    width: 30vw;
    height: 50px;
    margin: 0 auto;
    align-items: center;
    border-radius: 10px;
    top: 0px;
    animation-duration: 1s;
    animation-name: fadeout;

    span {
      font-size: 1.2em;
      font-weight: bold;
      text-align: center;
      margin: 0 auto;
    }
  }

  @keyframes fadeout {
    // fade-out시 opacity를 흐릿하다가 선명하기 만들자
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
