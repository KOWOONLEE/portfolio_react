import DetailNav from "../components/DetailNav";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineFileText } from "react-icons/ai";
import thirdMain from "../assets/images/project/third/3rd_main.png";

const ThirdProject = () => {
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
                  <strong>메인화면 오디오 플레이어</strong>
                </span>
              </div>
              <img src={thirdMain} alt="thirdMain" />
              <ul className="slidelist">
                <li>react-h5-audio-player 이용하여 플레이어 삽입</li>
                <li>오디오 리스트에서 음악 선택 후 플레이 가능</li>
                <li>재생 플레이어 다음 곡 넘김, 이전 곡 넘김 기능</li>
              </ul>
            </div>
          </Slider>
        </div>
        <div className="slideContent">
          <div className="slideDetail">
            <h2>Project Information</h2>
            <h4>Mini Project - 오디오 플레이어 제작 </h4>
            <h4>기업협업 과제 pre-onboarding </h4>
            <hr />
            <ul>
              <li>
                <strong>Category:</strong> Team project
              </li>
              <li>
                <strong>Project date:</strong> 22.10.11 ~ 22.10.14
              </li>
              <li>
                <strong>구성원:</strong> front-end 3명
              </li>
              <li>
                <strong>Role:</strong> 오디오 리스트, 오디오 플레이어 구현
              </li>
              <li>
                <strong>
                  Project Github-Repo:
                  <br />
                  <a href="https://github.com/KOWOONLEE/3rd_mini_audio-player">
                    <AiFillGithub />
                    third_audio player_git-repo로 이동
                  </a>
                </strong>
              </li>
              <li>
                <strong>
                  Project Vlog-Site :
                  <br />
                  <a href="https://velog.io/@kkk5689/Mini프로젝트오디오재생프로그램플레이어-만들기">
                    <AiOutlineFileText />{" "}
                    기업협업_Mini프로젝트_오디오플레이어_회고록
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
export default ThirdProject;

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
    margin-left: 18vw;
    border-bottom: 2px solid gray;
  }
  .slidelist {
    width: 35vw;
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
      margin: 30px auto;
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
    /* box-shadow: 0px 0 30px rgb(5 13 24 / 8%); */
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
`;
