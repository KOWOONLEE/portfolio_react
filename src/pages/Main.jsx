import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import styled from "styled-components";
import About from "../components/About";

function Main() {
  const [scroll, setScroll] = useState(0);
  const wheel = useRef(null);

  const onScrollFunction = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    console.log(scroll);
    scrollFunction();
  }, [scroll]);

  const scrollFunction = () => {
    if (scroll > 0 && scroll < 300) {
      wheel.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      return;
    }
  };

  return (
    <StyledMain>
      <Navbar />
      <div onWheel={onScrollFunction}>
        <Profile />
        <div ref={wheel} className="mainPage">
          <About />
        </div>
      </div>
      <div>
        <a href="#!" class="topButton">
          <i class="bi bi-arrow-up-short">i</i>
        </a>
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
    margin: 0 30px 0 30px;
  }
`;
