import styled from "styled-components";
import Portfolio from "./Portfolio";
import BottomToTop from "../components/BottomToTop";
import Contact from "./Contact";

function About() {
  return (
    <>
      <StyledAbout>
        <section id="about">
          <div className="aboutSection">
            <div className="paddingMargin">
              <h1>About</h1>
              <h2>Front-end Developer</h2>
              <div style={{ fontSize: "1.2em", lineHeight: "2vh" }}>
                <p>
                  기존의 직무에서 벗어나 개발자라는 새로운 길을 개척하고 있는
                  이고운입니다.
                </p>
                <p>
                  현실에 안주하지 않고 계속 발전해가는 것이 인생의 목표입니다.
                </p>
                <p style={{ marginBottom: "5vh" }}>
                  이 시대의 편리함을 책임지는 개발자로서 성장하고 싶습니다.
                </p>
              </div>
              <ul className="aboutList">
                <li>
                  <span>Name: </span> 이 고 운
                </li>
                <li>
                  <span>Vlog: </span>
                  <a href="https://velog.io/@kkk5689">
                    https://velog.io/@kkk5689
                  </a>
                </li>
                <li>
                  <span>Birthday: </span> 4 April 1992
                </li>
                <li>
                  <span>Github: </span>
                  <a href="https://github.com/KOWOONLEE">
                    https://github.com/KOWOONLEE
                  </a>
                </li>
                <li>
                  <span>Resume:</span> PDF Resume
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="skills" className="skillsSection">
          <div className="paddingMargin">
            <h1>Skills</h1>
            <p
              style={{
                fontSize: "1.2em",
                lineHeight: "3vh",
                marginBottom: "50px",
              }}
            >
              현재까지 배우고 사용했던 기술입니다.
            </p>
            <table>
              <tr>
                <th>Language</th>
                <th>Framework</th>
                <th>Communication</th>
              </tr>
              <tr>
                <td>HTML, CSS, Javascript, Typescript</td>
                <td>React</td>
                <td>Github, Notion, Slack</td>
              </tr>
              <tr></tr>
            </table>
          </div>
        </section>
        <section id="resume" className="resumeSection">
          <div className="paddingMargin">
            <h1>Resume</h1>
            <p style={{ fontSize: "1.2em", lineHeight: "3vh" }}>
              이력 및 학력에 대한 설명입니다.
            </p>
            <div className="resumetitle">
              <div className="resumediv">
                <h3>Education</h3>
                <div>
                  <h4>경기대학교</h4>
                  <ul>
                    <li>경제학과 학사 졸업</li>
                    <li>2011.3 ~ 2016.2</li>
                  </ul>
                </div>
              </div>
              <div className="resumediv">
                <h3>Experience</h3>
                <div>
                  <h4>JUSTCODE 개발 부트캠프 6기 수료</h4>
                  <ul>
                    <li>Foundation : Front-end</li>
                    <li>2022. 08. 01 ~ 2022. 10. 28</li>
                  </ul>
                  <h4>위더스(주)</h4>
                  <ul>
                    <li>경영관리팀 - 회계, 사무</li>
                    <li>2019. 05. 27 ~ 2022. 07. 28</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Portfolio />
        <Contact />
        <BottomToTop />
      </StyledAbout>
    </>
  );
}
export default About;
const StyledAbout = styled.div`
  display: inline-block;
  /* position: fixed; */
  width: 80%;
  margin-left: 20%;
  padding: 20px;

  .paddingMargin {
    padding: 30px;
    margin-bottom: 20px;
  }
  h1 {
    font-size: 3em;
    color: #112d53;
    font-family: Roboto Slab;
    margin: 0px;
  }
  h1::after {
    content: "";
    display: block;
    width: 5vw;
    border-bottom: 3px solid #38b2ea;
  }
  h2 {
    font-family: Roboto Slab;
  }
  .aboutList {
    list-style-type: "▷ ";
    line-height: 2em;
    font-size: 1.2em;

    span {
      font-size: 1.1em;
      font-weight: bold;
    }
    a {
      color: #3b7ea6;
      border: none;
      text-decoration-line: none;
    }
    a:hover {
      color: #f6a7b4;
    }
  }
  .aboutList li::marker {
    color: #3b7ea6;
    font-weight: bold;
  }
  .resumetitle {
    display: flex;
    width: 100%;
  }
  .resumediv {
    width: 50%;

    h3 {
      width: 28%;
      color: white;
      background-color: #3b7ea6;
      font-size: 1.6em;
      border: 2px solid #3b7ea6;
      border-radius: 30px;
      padding: 5px 10px 5px 10px;
      text-align: center;
      /* text-shadow: 1.5px 0 #000; */
    }

    h4 {
      font-size: 1.4em;
    }
    ul {
      margin-bottom: 30px;
      padding: 0 0 20px 40px;
      margin-top: -2px;
      border-left: 2px solid #1f5297;
      position: relative;
    }
    ul::before {
      content: "";
      position: absolute;
      width: 13px;
      height: 13px;
      border-radius: 50px;
      left: -9px;
      top: 0;
      background: #fff;
      border: 2px solid #1f5297;
    }

    li {
      font-size: 1.4em;
      line-height: 1.5em;
    }
  }

  .skillsSection {
    background-color: #f4f6fc;
  }
  table {
    width: 88%;
    height: 10vh;
    align-items: center;
    margin: auto;
    text-align: center;
    animation: fadeIn 2s ease-in-out;

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY() (20px);
      }
      to {
        opacity: 3;
        transform: none;
      }
    }
  }
  th {
    font-size: 1.6em;
  }

  td {
    width: 30%;
    height: 5vh;
    font-size: 1.3em;
  }
`;
