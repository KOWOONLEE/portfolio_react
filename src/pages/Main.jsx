import React from "react";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import styled from "styled-components";
import About from "../components/About";

function Main() {
  return (
    <StyledMain>
      <Navbar />
      <Profile />
      <div className="mainPage">
        <About />
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
    margin-left: 60px;
  }
`;
