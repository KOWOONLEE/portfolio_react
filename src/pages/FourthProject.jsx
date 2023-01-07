import DetailNav from "../components/DetailNav";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineFileText } from "react-icons/ai";
import fourthLogin from "../assets/images/project/fourth/4th_login.png";
import fourthreser from "../assets/images/project/fourth/4th_reservation.png";
import fourthcal from "../assets/images/project/fourth/4th_calendar.png";
import fourthno from "../assets/images/project/fourth/4th_not.png";

const FirstProject = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
  };
  return (
    <StyledProject>
      <DetailNav />
      <div className="contentWrap">
        <div className="slideImg">
          <Slider {...settings}>
            <div className="slideTitleWrap">
              <div>
                <span className="slideTitle">
                  <strong>메인페이지 로그인</strong>
                </span>
              </div>
              <img src={fourthLogin} alt="fourth_login" />
              <ul className="slidelist">
                <li>기준 조건 만족 시 버튼 활성화 및 색상 변경</li>
                <li>로그인시 상단 메뉴 바 버튼이 로그아웃으로 변경</li>
              </ul>
            </div>
            <div className="slideTitleWrap">
              <div>
                <span className="slideTitle">
                  <strong>예약 달력</strong>
                </span>
              </div>
              <img src={fourthcal} alt="fourthcal" />
              <ul className="slidelist">
                <li>
                  로그인 후 예약 페이지로 넘어감. 여기서 병원, 날짜 및 시간,
                  진료 종류 선택 후 예약하기 버튼 누르면 localstorage로 데이터
                  저장하여 조회 페이지로 넘어감.(getItem/setItem)
                </li>
                <li>달력은 오늘 이전일은 선택 불가능</li>
              </ul>
            </div>
            <div className="slideTitleWrap">
              <div>
                <span className="slideTitle">
                  <strong>예약 조회</strong>
                </span>
              </div>
              <img src={fourthreser} alt="fourthreser" />
              <ul className="slidelist">
                <li>조회페이지에는 예약 변경 버튼과 취소 버튼이 있음.</li>
                <li>
                  예약 변경은 현재 저장되어있는 localstorage 데이터 중 예약 관련
                  데이터를 지우고 예약하기 페이지로 넘어감.
                </li>
                <li>
                  예약 취소는 변경과 동일하게 localstorage 데이터를 지우고
                  메인페이지로 돌아감.
                </li>
                <li>
                  예약 취소하기 버튼은 예약 조회 페이지로 넘어감. 해당
                  페이지에서 변경 및 취소 가능
                </li>
              </ul>
            </div>
            <div className="slideTitleWrap">
              <div>
                <span className="slideTitle">
                  <strong>예약 불가</strong>
                </span>
              </div>
              <img src={fourthno} alt="fourthno" />
              <ul className="slidelist">
                <li>
                  만약 예약 완료 건이 있으면 예약 페이지 접속시에 '이미 예약
                  건이 있고 새로 예약하려면 기존 내역 지우세요'라고 뜸.
                </li>
              </ul>
            </div>
          </Slider>
        </div>
        <div className="slideContent">
          <div className="slideDetail">
            <h2>Project Information</h2>
            <h4>Mini Project - 병원 예약 프로그램 </h4>
            <h4>기업협업 과제 pre-onboarding </h4>
            <hr />
            <ul>
              <li>
                <strong>Category:</strong> Personal project
              </li>
              <li>
                <strong>Project date:</strong> 22.10.17 ~ 22.10.19
              </li>
              <li>
                <strong>구성원:</strong> front-end 1명 (개인)
              </li>
              <li>
                <strong>Role:</strong> 병원 예약 페이지 구현
              </li>
              <li>
                <strong>
                  Project Github-Repo:
                  <br />
                  <a href="https://github.com/KOWOONLEE/4th_mini_clinic-reservation">
                    <AiFillGithub /> 4th_clinic-reservation_git-repo로 이동
                  </a>
                </strong>
              </li>
              <li>
                <strong>
                  Project Vlog-Site :
                  <br />
                  <a href="https://velog.io/@kkk5689/Mini프로젝트병원예약프로그램DateTimePicker-라이브러리-사용">
                    <AiOutlineFileText />{" "}
                    기업협업_Mini프로젝트_병원예약프로그램_회고록
                  </a>
                </strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </StyledProject>
  );
};
export default FirstProject;

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
    width: 44vw;
    font-size: 1.1em;
    text-align: left;
    line-height: 2em;
    list-style: none;
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
    height: 60vh;
    margin-top: 20px;
    padding: 30px;
    box-shadow: 0px 0 30px gray;

    h2 {
      font-size: 1.6em;
      text-align: center;
      margin-top: 20px;
    }
    h4 {
      text-align: center;
      color: #205878;
      line-height: 0.1;
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
      height: 70vh;
      align-items: center;
    }
    .slideContent {
      display: block;
      width: 90%;
      margin: 0 auto;
    }
    .slideDetail {
      height: 50vh;
      margin-top: 50px;
      margin-bottom: 50px;
    }
    .slidelist {
      li {
        width: 62vw;
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

    .slick-slider {
      height: 75vh;
      margin-bottom: 30px;
    }
  }
`;
