import styled from "styled-components";
import projectData from "../assets/data/project.json";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Portfolio = () => {
  const navigate = useNavigate();
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    variableWidth: false,
  };

  // const projectFillters = [
  //   {
  //     id: 1,
  //     name: "All",
  //   },
  //   {
  //     id: 2,
  //     name: "Team Project",
  //   },
  //   {
  //     id: 3,
  //     name: "Personal Project",
  //   },
  // ];

  // useEffect(() => {
  //   const filteredData = projectData.filter((data) =>
  //     data.projectFilter.includes(projectFillters.name)
  //   );
  //   setProjectList(filteredData);
  // }, [projectFillters.name]);

  // const selectChange = (e) => {
  //   const value = e.target.value;
  //   setSelectedOption(value);
  //   setProjectList(projectList);
  // };

  return (
    <>
      <StyledPortfolio>
        <section id="portfolio" className="portfolioSection">
          <div className="paddingMargin">
            <h1>Portfolio</h1>
            <p style={{ fontSize: "1.2em", lineHeight: "3vh" }}>
              그동안 진행했던 프로젝트 리스트입니다.
            </p>
            <p style={{ fontSize: "1.2em", lineHeight: "3vh" }}>
              <strong>
                프로젝트 카드 클릭 후 상세페이지로 이동하여, 자세한 내용을
                확인해주세요 😃
              </strong>
            </p>
            <div className="portfolioContainer">
              <div className="portfolioWrap">
                <Swiper
                  slidesPerView={2}
                  spaceBetween={30}
                  centeredSlides={true}
                  loop={true}
                  navigation={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  {projectData.map((project, i) => {
                    const imgPath = require(`../assets/images/project/mainImg/main_${project.id}.png`);
                    return (
                      <SwiperSlide>
                        <div
                          className="SwiperInner"
                          key={projectData[i].id}
                          onClick={() => {
                            navigate(`/project/${project.navigate}`);
                          }}
                        >
                          <img src={imgPath} alt="fourthimg" />
                          <h2>{projectData[i].projectName}</h2>
                          <p>{projectData[i].projectTitle}</p>
                          <hr />
                          <p>
                            <strong>프로젝트 기술 : </strong>
                            {projectData[i].projectSkill}
                          </p>
                          <p>
                            <strong>사이트 소개 : </strong>
                            {projectData[i].projectIntro}
                          </p>
                          <p>
                            <strong>프로젝트 내 역할 :</strong>
                            {projectData[i].projectRoll}
                          </p>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
                {/* <div className="portfolioWrap">
                <div className="sliderWrap">
                  <Slider {...settings}>
                    {projectData.map((project, i) => {
                      const imgPath = require(`../assets/images/project/mainImg/main_${project.id}.png`);
                      return (
                        <div
                          key={projectData[i].id}
                          className="portfolioInner"
                          onClick={() => {
                            navigate(`/project/${project.navigate}`);
                          }}
                        >
                          <img src={imgPath} alt="fourthimg" />
                          <h2>{projectData[i].projectName}</h2>
                          <p>{projectData[i].projectTitle}</p>
                          <hr />
                          <p>
                            <strong>프로젝트 기술 : </strong>
                            {projectData[i].projectSkill}
                          </p>
                          <p>
                            <strong>사이트 소개 : </strong>
                            {projectData[i].projectIntro}
                          </p>
                          <p>
                            <strong>프로젝트 내 역할 :</strong>
                            {projectData[i].projectRoll}
                          </p>
                        </div>
                      );
                    })}
                  </Slider>
                </div>
              </div> */}
              </div>
            </div>
          </div>
        </section>
      </StyledPortfolio>
    </>
  );
};
export default Portfolio;

const StyledPortfolio = styled.div`
  /* display: inline-block; */
  /* width: 100%; */

  .portfolioSection {
    background-color: #f4f6fc;
    width: 70vw;
    margin: 0;
    padding: 0;
  }
  .portfolioContainer {
    display: flex;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    width: 100%;
    /* height: 70vh; */
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    background: linear-gradient(45deg, #ac8bef, #2ddbdc);
  }
  .center {
    width: 100%;
    margin: 0 50px;
  }
  .slick-list {
  }
  .portfolioWrap {
    width: 100%;
    margin: 30px;
    padding: 30px;
    /* transition: 0.3s;
    position: relative;
    color: black;
    background-color: white;
    background-color: pink;

    border: 1px solid black;
    overflow: hidden;
    z-index: 1; */
    /* display: flex; */
    position: relative;
    /* flex-direction: column; */
    /* align-content: center; */
    overflow: hidden;
  }
  .sliderWrap {
    width: 100%;
    .slick-list {
      width: 800px;
    }
  }

  .portfolioInner {
    width: 300px;
    /* height: 100%; */
    /* margin: 30px 0;
    padding: 40px;
    box-sizing: border-box;
    background-color: gray; */
  }

  .portfolioInner {
    background-color: white;
    /* position: relative;
    width: 5vw; */

    img {
      width: 200px;
      object-fit: center;
    }
    p {
      font-size: 1em;
      line-height: 1.5em;
    }
  }
  /* 
  .portfolioWrap:hover {
    transform: scale(1.1);
    border: 3px solid #38b2ea;
    z-index: 999;
    cursor: pointer;
  } */

  /* @media screen and (max-width: 768px) {
    #portfolio {
      width: 100%;
    }
    .portfolioContainer {
      display: block;
    }
    .portfolioWrap {
      width: 90%;
    }
  } */

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;

    width: 100%;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    object-fit: cover;
    position: relative;
    /* align-items: center; */
  }
  .SwiperInner {
    width: 100%;
    padding: 10%;
    background-color: rgba(255, 255, 255, 0.4);
  }

  .swiper-slide img {
    position: relative;
    width: 100%;
    z-index: 1;

    /* height: 100%; */
    /* object-fit: over; */
  }
`;
