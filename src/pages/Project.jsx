import { useParams } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import secondMain from "../assets/images/project/second/second_main.png";
import secondReview from "../assets/images/project/second/second_review.png";
import secondSearch from "../assets/images/project/second/second_search.png";
import secondMap from "../assets/images/project/second/second_map.png";
import secondMain2 from "../assets/images/project/second/second_main_2.png";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineFileText } from "react-icons/ai";

const Project = ({ project, setProject }) => {
  const { id } = useParams();
  const originId = project.find((item) => item.id === id);
  console.log(originId);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <StyledProject>
      <div className="projectNav">
        <div>
          <h2> PROJECT DETAILS</h2>
        </div>
        <div className="sideMenu">
          <a href="/">Main Page</a> <span>/ Portfolio Details </span>
        </div>
      </div>
      <div className="contentWrap">
        <div className="slideImg">
          <Slider {...settings}>
            <div>
              <img src={secondMain} alt="second_main" />
            </div>
            <div>
              <img src={secondReview} alt="second_main" />
            </div>
            <div>
              <img src={secondSearch} alt="second_main" />
            </div>
            <div>
              <img src={secondMap} alt="second_main" />
            </div>
            <div>
              <img src={secondMain2} alt="second_main" />
            </div>
          </Slider>
        </div>
        <div className="slideContent">
          <div className="slideDetail">
            <h2>Project Information</h2>
            <hr />
            <ul>
              <li>
                <strong>Category:</strong> Team project
              </li>
              <li>
                <strong>Project date:</strong> 22.09.19 ~ 22.09.29
              </li>
              <li>
                <strong>구성원:</strong> front-end 3명, back-end 1명
              </li>
              <li>
                <strong>Role:</strong> 메인화면, 매장 검색, 매장지도,
                <br />
                상세페이지 내 리뷰, 기타페이지
              </li>
              <li>
                <strong>
                  Project Github-Repo:
                  <br />
                  <a href="https://github.com/KOWOONLEE/justcode-6-2nd-team1-front">
                    <AiFillGithub /> 2차 프로젝트 git-repo로 이동
                  </a>
                </strong>
              </li>
              <li>
                <strong>
                  Project Vlog-Site :
                  <br />
                  <a href="https://velog.io/@kkk5689/2차-프로젝트-카페-홈페이지-클론-공차-1진행과정">
                    <AiOutlineFileText /> 2차 프로젝트 회고록 - 1.진행과정
                  </a>
                  <br />
                  <a href="https://velog.io/@kkk5689/2차-프로젝트-카페-홈페이지-클론-공차-메인페이지-매장-검색-리뷰-작성-2상세코드">
                    <AiOutlineFileText /> 2차 프로젝트 회고록 - 2.상세코드
                  </a>
                  <br />
                  <a href="https://velog.io/@kkk5689/2차-프로젝트-카페-홈페이지-클론-공차-3-회고록">
                    <AiOutlineFileText /> 2차 프로젝트 회고록 - 3.회고록
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
export default Project;

const StyledProject = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;

  .projectNav {
    display: flex;
    width: 90%;
    height: 10vh;
    background-color: #f0eeee;
    align-items: center;
    margin: 0 auto;
    padding: 0 20px 0 20px;
    box-shadow: 0 5px 5px -4px gray;
    justify-content: space-between;

    h2 {
      /* font-family: "Kanit", sans-serif; */
      font-size: 1.7em;
      font-weight: 600;
      color: #205878;
      text-shadow: 1px 1px 1px #205878;
    }
  }
  .sideMenu {
    font-size: 1.2em;
    a {
      text-decoration: none;
      color: #38b2ea;
      font-weight: bold;
    }
    a:hover {
      color: #f6a7b4;
    }
  }
  .contentWrap {
    display: flex;
    width: 90%;
    margin: 0 auto;
  }
  .slideImg {
    display: inline-block;
    width: 55%;
    height: 80vh;
    margin-right: 5%;
    /* border: 3px solid #38b2ea; */
    /* background-color: #38b2ea; */
    padding: 50px;

    img {
      width: 45%;
      height: 90%;
      object-fit: cover;
      align-items: center;
      margin: 0 auto;
      border: 1px solid gray;
    }
  }
  .slideContent {
    width: 40%;
    /* background-color: #f6a7b4; */
    /* border: 1px solid #f6a7b4; */
  }
  .slideDetail {
    height: 60vh;
    margin-top: 20px;
    padding: 30px;
    box-shadow: 0px 0 30px #38b2ea;
    /* box-shadow: 0px 0 30px rgb(5 13 24 / 8%); */

    li {
      font-size: 1.1em;
      line-height: 33px;
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
    /* margin: 0px; */
    /* padding: 30px; */
  }
  .slick-track {
    margin: 0;
  }
  .slick-prev:before,
  .slick-next:before {
    font-size: 25px;
    color: #38b2ea;
  }
`;
