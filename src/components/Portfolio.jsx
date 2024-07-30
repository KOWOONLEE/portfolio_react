import styled from "styled-components";
import projectData from "../assets/data/project.json";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Portfolio = () => {
  const navigate = useNavigate();

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
                    const imgClass =
                      imgPath ===
                      require(`../assets/images/project/mainImg/main_2.png`)
                        ? "specificImage"
                        : "defaultImage";

                    return (
                      <SwiperSlide>
                        <div
                          className="SwiperInner"
                          key={projectData[i].id}
                          onClick={() => {
                            navigate(`/project/${project.navigate}`);
                          }}
                        >
                          <img
                            className={imgClass}
                            src={imgPath}
                            alt={`main_${projectData[i].id}`}
                          />
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
  display: inline-block;
  width: 100%;
  box-sizing: border-box;

  .portfolioSection {
    background-color: #f4f6fc;
    width: 75vw;
  }
  .paddingMargin {
    padding: 30px;
    margin-bottom: 20px;
  }
  .portfolioContainer {
    display: flex;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    width: 100%;
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
    /* position: relative; */
    overflow: hidden;
  }
  .sliderWrap {
    .slick-list {
      width: 800px;
    }
  }

  .portfolioInner {
    width: 200px;
  }

  .portfolioInner {
    background-color: white;

    img {
      width: 200px;
      object-fit: center;
    }
    p {
      font-size: 1em;
      line-height: 1.5em;
    }
  }

  .swiper {
    width: 100%;
    height: 80vh;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    /* width: 100%; */
    display: flex;
    /* justify-content: center; */
    object-fit: cover;
    position: relative;
  }
  .SwiperInner {
    width: 100%;
    padding: 10%;
    background-color: rgba(255, 255, 255, 0.4);
  }

  .defaultImage {
    position: relative;
    width: 100%;
    z-index: 1;
  }
  .specificImage {
    width: 60%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    background: linear-gradient(45deg, #ac8bef, #2ddbdc);
    color: transparent;
    background-clip: text;
  }

  .swiper-pagination-bullet-active {
  }
`;
