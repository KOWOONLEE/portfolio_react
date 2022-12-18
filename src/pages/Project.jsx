import DetailNav from "../components/DetailNav";
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
      <DetailNav />
      <div className="contentWrap">
        <div className="slideImg">
          <Slider {...settings}>
            <div>
              <img src={secondMain} alt="second_main" />
              ㅇ쩍어지ㅏ얼미넝ㄹ먼ㅇ리먼이라ㅓㅁㅇㄹ
            </div>
            <div>
              <img src={secondReview} alt="second_main" />
              낭러니ㅏ엇ㅁ미ㅏㄷ너시
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
            <h4>일차 一茶 : 카페 음료 주문 모바일웹 사이트 </h4>
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
    padding: 40px;

    img {
      width: 50%;
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
    height: 55vh;
    margin-top: 20px;
    padding: 30px;
    box-shadow: 0px 0 30px #38b2ea;
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
