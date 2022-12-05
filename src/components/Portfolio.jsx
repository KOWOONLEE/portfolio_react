import styled from "styled-components";

const Portfolio = () => {
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
              <ul>
                <li>All</li>
                <li>Team Project</li>
                <li>Personal Project</li>
              </ul>
            </div>
            <div className="portfolioContainer">
              <div className="portfolioWrap">
                <img
                  src="https://user-images.githubusercontent.com/108816777/197381724-349280a7-42c1-4d2c-8f74-36cc9b602dd3.png"
                  class="img-fluid"
                  alt="1st_team_project_main"
                />
                <p></p>
                <h2>HALO</h2>
                <p class="projectSub">커뮤니티 사이트</p>
                <hr />
                <p>프로젝트 기술 : React.js</p>
                <p>사이트 소개 : 스터디,프로젝트 팀원 모집</p>
                <p>프로젝트 내 역할 : 로그인, 회원가입, 이용약관</p>
                <div class="portfolio-links">
                  <a
                    href="https://youtu.be/ETs8lwviMBw"
                    class="portfolio-lightbox"
                    title="1차 프로젝트 - HALO 사이트 구현 프로젝트 구현 영상"
                  >
                    <i class="bx bx-plus"></i>
                  </a>
                  <a href="http://www.naver.com" title="More Details">
                    <i class="bx bx-link"></i>
                  </a>
                </div>
              </div>
              <div className="portfolioWrap">
                <img
                  src="https://user-images.githubusercontent.com/108816777/197381724-349280a7-42c1-4d2c-8f74-36cc9b602dd3.png"
                  class="img-fluid"
                  alt="1st_team_project_main"
                />
                <p></p>
                <h2>HALO</h2>
                <p class="projectSub">커뮤니티 사이트</p>
                <hr />
                <p>프로젝트 기술 : React.js</p>
                <p>사이트 소개 : 스터디,프로젝트 팀원 모집</p>
                <p>프로젝트 내 역할 : 로그인, 회원가입, 이용약관</p>
                <div class="portfolio-links">
                  <a
                    href="https://youtu.be/ETs8lwviMBw"
                    class="portfolio-lightbox"
                    title="1차 프로젝트 - HALO 사이트 구현 프로젝트 구현 영상"
                  >
                    <i class="bx bx-plus"></i>
                  </a>
                  <a href="http://www.naver.com" title="More Details">
                    <i class="bx bx-link"></i>
                  </a>
                </div>
              </div>
              <div className="portfolioWrap">
                <img
                  src="https://user-images.githubusercontent.com/108816777/197381724-349280a7-42c1-4d2c-8f74-36cc9b602dd3.png"
                  class="img-fluid"
                  alt="1st_team_project_main"
                />
                <p></p>
                <h2>HALO</h2>
                <p class="projectSub">커뮤니티 사이트</p>
                <hr />
                <p>프로젝트 기술 : React.js</p>
                <p>사이트 소개 : 스터디,프로젝트 팀원 모집</p>
                <p>프로젝트 내 역할 : 로그인, 회원가입, 이용약관</p>
                <div class="portfolio-links">
                  <a
                    href="https://youtu.be/ETs8lwviMBw"
                    class="portfolio-lightbox"
                    title="1차 프로젝트 - HALO 사이트 구현 프로젝트 구현 영상"
                  >
                    <i class="bx bx-plus"></i>
                  </a>
                  <a href="http://www.naver.com" title="More Details">
                    <i class="bx bx-link"></i>
                  </a>
                </div>
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

  .portfolioSection {
    background-color: #f4f6fc;
  }
  .portfolioContainer {
    display: flex;
    justify-content: center;
  }
  .portfolioFilter {
    display: flex;
    width: 40vw;
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
