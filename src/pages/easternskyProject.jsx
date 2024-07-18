import DetailNav from "../components/DetailNav";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactPlayer from "react-player";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineFileText } from "react-icons/ai";
import easeternskyMain from "../assets/images/project/easternsky/main.png";
import easeternskyPop from "../assets/images/project/easternsky/emergency_popup.png";
import easeternskyDetailNav from "../assets/images/project/easternsky/detail_nav.png";
import easeternskyDetailEmr from "../assets/images/project/easternsky/detail_emergency.png";
import easternskyUserInfo from "../assets/images/project/easternsky/userinfo.png";
import easeternskySign from "../assets/images/project/easternsky/signin.png";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setPath } from "../redux/pathSlice";

const EasternskyProject = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
  };

  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const fullPath = location.pathname;
    const pathParts = fullPath.split("/");
    const extractedPath = pathParts[2] || ""; // 두 번째 슬래시 이후의 값, 없으면 빈 문자열
    dispatch(setPath(extractedPath));
  }, [location, dispatch]);

  return (
    <StyledProject>
      <DetailNav />
      <div className="contentWrap">
        <div className="slideImg">
          <Slider {...settings}>
            <div className="slideTitleWrap">
              <div>
                <span className="slideTitle">
                  <strong>메인페이지</strong>
                </span>
              </div>
              <img src={easeternskyMain} alt="main" />
              <img
                src={easeternskyPop}
                alt="emergency-pop"
                style={{ width: "200px" }}
              />
              <ul className="slidelist">
                <li>
                  디바이스 중 비상상황 알림 신호가 들어오는 디바이스 정보 출력
                </li>
                <li>
                  메인페이지 비상상황 카드에는 발생 위치, 압력, 충격 감지 여부
                  등 확인
                </li>
                <li>
                  상호 구조를 위한 주변기기 검색 가능 및 정보 제공 SMS 발신
                </li>
              </ul>
            </div>
            <div className="slideTitleWrap">
              <div>
                <span className="slideTitle">
                  <strong>상세 페이지</strong>
                </span>
              </div>
              <div style={{ display: "flex" }}>
                <img
                  src={easeternskyDetailNav}
                  alt="detail_nav"
                  style={{ width: "120px" }}
                />
                <img
                  src={easeternskyDetailEmr}
                  alt="detail_emr"
                  style={{ width: "550px" }}
                />
              </div>

              <ul className="slidelist">
                <li>상세페이지는 일반 비회원 등급에서는 조회 불가</li>
                <li>
                  디바이스, 사용자, 비상상황, 등록기관 등의 구체적인 정보 확인
                </li>
                <li>
                  대용량 데이터 처리를 위한 서버사이드렌더링 데이터테이블 구현
                </li>
                <li>
                  비상상황 정보 페이지에서는 위,경도 전환 후 구글 맵 지도 조회,
                  <br />
                  오디오파일 변환 후 재생바 구현
                </li>
              </ul>
            </div>
            <div className="slideTitleWrap">
              <div>
                <span className="slideTitle">
                  <strong>로그인/회원가입</strong>
                </span>
              </div>
              <img
                src={easternskyUserInfo}
                alt="userInfo"
                style={{ width: "600px" }}
              />
              <img
                src={easeternskySign}
                alt="signin"
                style={{ width: "300px" }}
              />
              <ul className="slidelist">
                <li>등급별 권한 관리 - 관리자 등급 사용자 추가 및 삭제 가능</li>
                <li>
                  사용자 추가하기에서 관리자가 유저정보 추가 후 비고란에
                  해시코드 확인 가능
                </li>
                <li>
                  회원가입단계에서 해시코드 입력 및 데이터 일치 후 회원가입 완료
                </li>
              </ul>
            </div>
          </Slider>
        </div>
        <div className="slideContent">
          <div className="slideDetail">
            <h2>Project Information</h2>
            <h4>ES-Guardians : 응급 디바이스 비상상황 확인 웹페이지</h4>
            <hr />
            <ul>
              <li>
                <strong>Company:</strong> Easternsky
              </li>
              <li>
                <strong>Category:</strong> Business/Team project
              </li>
              <li>
                <strong>Project date:</strong> 23.05.01 ~ 24.04.30
              </li>
              <li>
                <strong>Role:</strong> 응급신호 데이터 처리 및 관리 (Front-end)
                <ul>
                  <li>전반적인 Front-end 업무 진행 외 API 작업</li>
                  <li>html페이지 React 프로젝트로 전환</li>
                  <li>메인페이지, 상세페이지 클라이언트 기능 작업</li>
                  <li>한국어 - 영어 번역 전환 작업</li>
                </ul>
              </li>
              <li>
                <strong>Skills</strong> React.js, Node.js, docker, AWS etc.
              </li>
              <li>
                <strong>
                  Project Github-Repo:
                  <br />
                  <AiFillGithub />{" "}
                  <span style={{ textDecoration: "underline" }}>
                    보안상 접근 불가
                  </span>
                </strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </StyledProject>
  );
};
export default EasternskyProject;

const StyledProject = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;

  .contentWrap {
    display: flex;
    width: 90%;
    margin: 0 auto;
  }
  .slideTitleWrap {
    display: flex;
    text-align: center;
    padding: 5px;
  }
  .slideTitle {
    font-size: 1.3em;
  }

  .slideTitle::after {
    content: "";
    display: flex;
    text-align: center;
    align-items: center;
    width: 9vw;
    margin-top: 5px;
    margin-left: 20vw;
    border-bottom: 2px solid gray;
  }
  .slidelist {
    width: 35vw;
    font-size: 1.1em;
    text-align: left;
    line-height: 1.5em;
    list-style: none;
    white-space: pre;
  }

  .slidelist li::before {
    content: "👉 ";
  }

  .slideImg {
    display: inline-block;
    width: 55%;
    height: 80vh;
    margin-right: 5%;
    padding: 40px;

    img {
      width: 80%;
      height: 90%;
      object-fit: cover;
      align-items: center;
      margin: 20px auto;
      border: 1px solid gray;
    }
  }
  .slideContent {
    width: 40%;
  }
  .slideDetail {
    height: 90vh;
    margin-top: 20px;
    padding: 30px;
    box-shadow: 0px 0 30px gray;
    /* box-shadow: 0px 0 30px rgb(5 13 24 / 8%); */
    h2 {
      font-size: 1.6em;
      text-align: center;
      line-height: 0.2;
    }
    h4 {
      text-align: center;
      color: #205878;
    }
    li {
      font-size: 1em;
      line-height: 29px;
    }
    a {
      color: #38b2ea;
      text-decoration: none;
      font-weight: 500;
    }
    a:hover {
      color: #f6a7b4;
    }
  }
  .slick-slider {
  }
  .slick-track {
    margin: 0;
  }
  .slick-prev:before,
  .slick-next:before {
    font-size: 25px;
    color: #38b2ea;
  }
  @media screen and (max-width: 768px) {
    .contentWrap {
      display: block;
      align-items: center;
    }
    .slideImg {
      display: block;
      width: 90%;
      align-items: center;
    }
    .slideContent {
      display: block;
      width: 90%;
      margin: 0 auto;
    }
    .slideDetail {
      height: 90vh;
      margin-bottom: 50px;
    }
    .slidelist {
      li {
        width: 60vw;
      }
    }
    .slideTitle::after {
      content: "";
      display: flex;
      text-align: center;
      align-items: center;
      width: 9vw;
      margin-top: 5px;
      margin-left: 34vw;
      border-bottom: 2px solid gray;
    }
  }
`;
