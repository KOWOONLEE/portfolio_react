import styled from "styled-components";
import secondImg from "../assets/images/second_main.png";
import forthImg from "../assets/images/project/4th_main.png";
import projectData from "../assets/data/project.json";
import { useEffect, useState } from "react";
import { ConfigProvider, Collapse, Radio } from "antd";

const { Panel } = Collapse;
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

  // useEffect(() => {
  //   const filteredData = projectData.filter((data) =>
  //     data.projectFilter.includes(projectFillters.name)
  //   );
  //   setProjectList(filteredData);
  // }, [projectFillters.name]);

  // const fillterdByTag = () => {
  //   if (selectedOption === projectFillters.name) {
  //     return projectList.filter((item) =>
  //       item.projectFilter.includes(selectedOption)
  //     );
  //   }
  // };

  const filterd = [...projectList];
  useEffect(() => {
    const results = filterd.filter((item) =>
      item.projectFilter.includes(selectedOption)
    );
    setProjectList(results);
    return () => setProjectList(filterd);
  }, [selectedOption]);

  const selectChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setSelectedOption(value);
    setProjectList(projectList);
  };

  const onChange = (e) => {
    console.log(`radio checked:${e.target.value}`);
    setSelectedOption(e.target.value);
    console.log(selectedOption);
    setProjectList(filterd);
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
              <ConfigProvider
                theme={{
                  components: {
                    Radio: {
                      colorPrimary: "#38b2ea",
                    },
                  },
                }}
              >
                <Radio.Group
                  className="radiostyle"
                  onChange={onChange}
                  defaultValue="1"
                  buttonStyle="solid"
                >
                  {projectFillters.map((item) => (
                    <Radio.Button key={item.id} value={`${item.id}`}>
                      {item.name}
                    </Radio.Button>
                  ))}
                </Radio.Group>
              </ConfigProvider>
              {projectList.map((item, idx) => (
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
              {projectList
                .filter((val) => {
                  if (selectedOption === projectFillters.name) {
                    return val;
                  } else return val;
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
  .radiostyle {
    display: flex;
    width: 35vw;
    background-color: white;
    text-align: center;
    align-items: center;
    padding: 0 20px 0 23px;
    border-radius: 30px;
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
