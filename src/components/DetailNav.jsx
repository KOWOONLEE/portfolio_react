import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsList } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import Profile_img from "../assets/images/kowoon_profile.jpeg";

import styled from "styled-components";
import { useSelector } from "react-redux";

const DetailNav = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const path = useSelector((state) => state.path);

  const handleNav = () => {
    setMobileNav(!mobileNav);
  };
  const navigate = useNavigate();
  const [firstHover, setFirstHover] = useState("");
  const [secondHover, setSecondHover] = useState("");
  const [thirdHover, setThirdHover] = useState("");
  const [fourthHover, setFourthHover] = useState("");
  const [easternHover, setEasternHover] = useState("");

  return (
    <StyledNav>
      <div className="projectNav">
        <div onClick={handleNav} className="mobileToggle">
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
        <div className="frontMenu">
          <div className="detailsProfile">
            <img className="profileImg" alt="profile_img" src={Profile_img} />
          </div>
          <div className="projectDetailwordWrap">
            <div
              className="projectDetailword"
              onClick={() => {
                navigate("/");
              }}
            >
              <h2> PROJECT DETAILS</h2>
              <h3>Project &gt; {path} </h3>
            </div>
          </div>
        </div>

        <div className="middleMenu">
          <span
            onMouseEnter={() => {
              setEasternHover(true);
            }}
            onMouseLeave={() => {
              setEasternHover(false);
            }}
            onClick={() => navigate("/project/easternsky")}
          >
            easternsky
          </span>
          <span>|</span>
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
          <div
            className="exitBtn"
            onClick={() => {
              navigate("/");
            }}
          >
            Main Page
            <div className="exitIcon">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
      {mobileNav ? (
        <div className="mobileNavMid">
          <div className="mobileNavWrap">
            <ul className="mobileNavList">
              <li onClick={() => navigate("/project/easternsky")}>
                business project - ESG - 응급 디바이스 비상상황 확인 웹페이지
              </li>
              <li onClick={() => navigate("/project/first")}>
                first project - Hallo 팀원 모집 사이트
              </li>
              <li onClick={() => navigate("/project/second")}>
                second project - 일차 카페 모바일 웹 사이트
              </li>
              <li onClick={() => navigate("/project/third")}>
                third project - 오디오 플레이어
              </li>
              <li onClick={() => navigate("/project/fourth")}>
                fourth project - 병원 예약 페이지
              </li>
            </ul>
          </div>
        </div>
      ) : null}
      <Divhover>
        {easternHover ? (
          <div className="first">
            <span> ESG - 응급 디바이스 비상상황 확인 웹페이지</span>
          </div>
        ) : (
          ""
        )}
        {firstHover ? (
          <div className="first">
            <span> Hallo - 스터디모집 커뮤니케이션 사이트 제작</span>
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
  font-family: "Ubuntu", sans-serif;

  .frontMenu {
    display: flex;
    width: 20vw;
    justify-content: space-between;
  }
  .detailsProfile {
    width: 4vw;
    height: 4vw;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
      border-radius: 50%;
    }
  }
  .projectDetailwordWrap {
    display: flex;
  }
  .projectDetailword {
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;

    h2 {
      font-size: 1.6em;
      font-weight: 400;
      color: white;
      margin: 0;
    }
    h3 {
      color: white;
      font-size: 1em;
      font-weight: 400;
      margin: 5px 0;
    }
  }

  .mobileToggle {
    display: none;
  }
  .projectNav {
    display: flex;
    width: 90%;
    height: 10vh;
    background-color: #27314a;
    border-radius: 20px;
    align-items: center;
    margin: 0 auto;
    padding: 0 20px 0 20px;
    box-shadow: 0 5px 5px -4px gray;
    justify-content: space-between;
  }
  .middleMenu {
    color: white;

    span {
      font-size: 1.2em;
      /* font-weight: bold; */
      margin-right: 40px;
    }
    span:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  .sideMenu {
    font-size: 1.2em;
    span {
      color: #d9d2d2;
    }
  }
  .exitBtn {
    display: flex;
    align-items: center;
    width: 9.5vw;
    justify-content: space-between;
    text-decoration: none;
    color: white;
  }
  .exitBtn:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .exitIcon {
    display: flex;
    width: 35px;
    height: 35px;
    background-color: #38b2ea;
    border-radius: 5px;
    justify-content: center;
    align-items: center;

    svg {
      fill: #27314a;
    }
  }
  .mobileNavMid {
    display: none;
  }

  @media screen and (max-width: 768px) {
    .mobileToggle {
      display: flex;
      right: 15px;
      bottom: 15px;
      z-index: 999;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border: none;
      cursor: pointer;
    }

    .icon {
      font-size: 45px;
      color: #fff;
      line-height: 0;
    }
    .mobileNavList {
      list-style: none;
      line-height: 2.6em;
      color: white;
      font-size: 1.1em;
      overflow: hidden;

      li {
        width: 70vw;
        border-bottom: 1px solid gray;
      }
      li:hover {
        color: pink;
        cursor: pointer;
      }
    }
    .mobileNavList li::before {
      content: "💾 ";
    }

    .projectDetailword {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .middleMenu {
      display: none;
    }
    .sideMenu {
      display: none;
    }
    .mobileNavMid {
      display: fixed;
      position: relative;
      top: 20vh;
      align-items: center;
      justify-content: center;
    }
    .mobileNavWrap {
      display: flex;
      position: fixed;
      width: 90vw;
      height: 40vh;
      align-items: center;
      vertical-align: center;
      justify-content: center;
      margin: 0 auto;
      z-index: 9999;
      background-color: #444343;
    }
  }
`;
const Divhover = styled.div`
  height: 20px;
  color: black;
  transition: top 1s ease-in;
  top: 20px;

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
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
