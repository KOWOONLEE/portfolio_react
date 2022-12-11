import styled from "styled-components";
import secondImg from "../assets/images/second_main.png";
import forthImg from "../assets/images/project/4th_main.png";
import projectData from "../assets/data/project.json";
import { useEffect, useState } from "react";

const Portfolio = () => {
  const projectFillters = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Team Project",
    },
    {
      id: 3,
      name: "Personal Project",
    },
  ];
  const [projectList, setProjectList] = useState([]);
  const [isChecked, setIsCheked] = useState(false);
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    const filteredData = projectData.filter((data) =>
      data.projectFilter.includes(projectFillters.name)
    );
    setProjectList(filteredData);
  }, [projectFillters.name]);

  const selectChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setSelectedOption(value);
    setProjectList(projectList);
  };

  return (
    <>
      <StyledPortfolio>
        <section className="portfolioSection">
          <div className="paddingMargin">
            <h1>Portfolio</h1>
            <p style={{ fontSize: "1.2em", lineHeight: "3vh" }}>
              그동안 진행했던 프로젝트 리스트입니다.
            </p>
            <p style={{ fontSize: "1.2em", lineHeight: "3vh" }}>
              ➕ 버튼을 클릭하여 구현 영상 확인, 혹은 🔗 아이콘을 클릭하여
              프로젝트 상세 페이지로 이동해주세요.
            </p>
            <div className="portfolioFilter">
              {projectFillters.map((item) => (
                <label key={item.id}>
                  <input
                    type="checkout"
                    value={selectedOption}
                    onClick={selectChange}
                  />
                  <ul>
                    <li>{item.name}</li>
                  </ul>
                </label>
              ))}
              {projectList
                .filter((val) => {
                  if (selectedOption === projectFillters.name) {
                    return val;
                  }
                })
                .map((item, idx) => (
                  <div className="portfolioWrap" value="item" key="id">
                    <img src={item.projectImg} alt="project" />
                    <h2>{item.projectName}</h2>
                    <p class="projectSub">{item.projectTitle}</p>
                    <hr />
                    <p>프로젝트 기술 : {item.projectSkill}</p>
                    <p>사이트 소개 : {item.projectIntro}</p>
                    <p>프로젝트 내 역할 : {item.projectRoll}</p>{" "}
                  </div>
                ))}
              {/* <ul>
                <li>All</li>
                <li>Team Project</li>
                <li>Personal Project</li>
              </ul> */}
            </div>
            <div className="portfolioContainer">
              {projectData.map((item, idx) => (
                <div className="portfolioWrap" value="item" key="id">
                  <img src={item.projectImg} alt="project" />
                  <h2>{item.projectName}</h2>
                  <p class="projectSub">{item.projectTitle}</p>
                  <hr />
                  <p>프로젝트 기술 : {item.projectSkill}</p>
                  <p>사이트 소개 : {item.projectIntro}</p>
                  <p>프로젝트 내 역할 : {item.projectRoll}</p>{" "}
                </div>
              ))}
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
  .portfolioFilter {
    display: flex;
    width: 35vw;
    background-color: white;
    text-align: center;
    align-items: center;
    margin: 20px auto;
    border-radius: 30px;

    ul {
      list-style: none;
      margin: 0 auto;
      padding: 0;
      text-align: center;
      font-weight: bold;
    }
    li {
      font-size: 1.1em;
      padding: 0 0 0 0;
      float: left;
      margin: 10px 20px 10px 20px;
    }
    li:hover {
      color: #38b2ea;
      cursor: pointer;
    }
  }

  .portfolioWrap {
    display: inline-block;
    width: calc(80% / 3);
    height: 100%;
    transition: 0.3s;
    position: relative;
    background-color: white;
    margin: 15px;
    padding: 10px;
    overflow: hidden;
    z-index: 1;

    img {
      width: 100%;
    }
  }
`;
