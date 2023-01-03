import styled from "styled-components";
import firstImg from "../assets/images/project/first/first_main.png";
import secondImg from "../assets/images/second_main.png";
import thirdMain from "../assets/images/project/third/3rd_main.png";
import fourthImg from "../assets/images/project/4th_main.png";
import projectData from "../assets/data/project.json";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();
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
              <div
                className="portfolioWrap"
                onClick={() => {
                  navigate("/project/first");
                }}
              >
                <img className="firstImg" src={firstImg} alt="firstimg" />
                <h2>{projectData[1].projectName}</h2>
                <p>{projectData[1].projectTitle}</p>
                <hr />
                <p>
                  <strong>프로젝트 기술 : </strong>
                  {projectData[1].projectSkill}
                </p>
                <p>
                  <strong>사이트 소개 : </strong>
                  {projectData[1].projectIntro}
                </p>
                <p>
                  <strong>프로젝트 내 역할 :</strong>
                  {projectData[1].projectRoll}
                </p>
              </div>
              <div
                className="portfolioWrap"
                onClick={() => {
                  navigate("/project/second");
                }}
              >
                <img src={secondImg} alt="secondimg" />
                <h2>{projectData[0].projectName}</h2>
                <p>{projectData[0].projectTitle}</p>
                <hr />
                <p>
                  <strong>프로젝트 기술 : </strong>
                  {projectData[0].projectSkill}
                </p>
                <p>
                  <strong>사이트 소개 : </strong>
                  {projectData[0].projectIntro}
                </p>
                <p>
                  <strong>프로젝트 내 역할 :</strong>
                  {projectData[0].projectRoll}
                </p>
              </div>
              <div
                className="portfolioWrap "
                onClick={() => {
                  navigate("/project/third");
                }}
              >
                <img src={thirdMain} alt="thirdimg" />
                <h2>{projectData[2].projectName}</h2>
                <p>{projectData[2].projectTitle}</p>
                <hr />
                <p>
                  <strong>프로젝트 기술 : </strong>
                  {projectData[2].projectSkill}
                </p>
                <p>
                  <strong>사이트 소개 : </strong>
                  {projectData[2].projectIntro}
                </p>
                <p>
                  <strong>프로젝트 내 역할 :</strong>
                  {projectData[2].projectRoll}
                </p>
              </div>
              <div
                className="portfolioWrap "
                onClick={() => {
                  navigate("/project/fourth");
                }}
              >
                <img src={fourthImg} alt="fourthimg" />
                <h2>{projectData[3].projectName}</h2>
                <p>{projectData[3].projectTitle}</p>
                <hr />
                <p>
                  <strong>프로젝트 기술 : </strong>
                  {projectData[3].projectSkill}
                </p>
                <p>
                  <strong>사이트 소개 : </strong>
                  {projectData[3].projectIntro}
                </p>
                <p>
                  <strong>프로젝트 내 역할 :</strong>
                  {projectData[3].projectRoll}
                </p>
              </div>

              {/* {projectData.map((item, idx) => (
                <div
                  className="portfolioWrap"
                  key="item"
                  onClick={() => {
                    navigate(`/project/${item.id}`);
                  }}
                > */}
              {/* <div className="portfolioWrap" value="item" key="id"> */}
              {/* <img src={item.projectImg} alt="project" />
                  <h2>{item.projectName}</h2>
                  <p className="projectSub">{item.projectTitle}</p>
                  <hr />
                  <p>프로젝트 기술 : {item.projectSkill}</p>
                  <p>사이트 소개 : {item.projectIntro}</p>
                  <p>프로젝트 내 역할 : {item.projectRoll}</p>{" "}
                </div>
              ))} */}
            </div>

            <div className="portfolioContainer"></div>
          </div>
        </section>
      </StyledPortfolio>
    </>
  );
};
export default Portfolio;

const StyledPortfolio = styled.div`
  display: inline-block;

  .portfolioSection {
    background-color: #f4f6fc;
  }
  .portfolioContainer {
    display: flex;
    justify-content: center;
  }
  .radiostyle {
    display: flex;
    width: 35vw;
    background-color: white;
    text-align: center;
    align-items: center;
    padding: 0 20px 0 23px;
    border-radius: 30px;
  }

  .portfolioWrap {
    display: inline-block;
    width: calc(80% / 3);
    height: 100%;
    transition: 0.3s;
    position: relative;
    color: black;
    background-color: white;
    margin: 15px;
    padding: 10px;
    overflow: hidden;
    z-index: 1;

    img {
      width: 100%;
    }
    p {
      font-size: 1em;
      line-height: 1.5em;
    }
  }

  .portfolioWrap:hover {
    transform: scale(1.1);
    border: 3px solid #38b2ea;
    z-index: 999;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    #portfolio {
      /* width: 100%; */
    }
    .portfolioContainer {
      display: block;
    }
    .portfolioWrap {
      width: 90%;
    }
  }
`;
