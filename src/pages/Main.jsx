import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import styled from "styled-components";
import About from "../components/About";

function Main() {
  return (
    <StyledMain>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="mainWrap">
        <Profile />
        <div className="mainPage">
          <About />
        </div>
      </div>
    </StyledMain>
  );
}

export default Main;

const StyledMain = styled.div`
  display: inline-block;
  width: 100%;
  height: 100vh;
  /* flex-direction: row; */
  /* align-items: stretch; */
  /* flex-direction: row; */
  /* justify-content: space-between; */
  .mainPage {
    margin: 0 20px 0 20px;
  }
  @media screen and (max-width: 768px) {
    .mainWrap {
      display: block;
      width: 100%;
      /* margin-left: 20%; */
    }
  }
`;
