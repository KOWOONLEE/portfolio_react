import styled from "styled-components";
import { BsList } from "react-icons/bs";
import { useState, useEffect } from "react";

const MobileNav = () => {
  const [mobileMenu, setMobileMenu] = useState(true);

  const showNavIcon = () => {
    if (window.innerWidth <= 768) {
      setMobileMenu(false);
    } else {
      setMobileMenu(true);
    }
  };

  useEffect(() => {
    console.log(window.innerWidth);
    showNavIcon();
  }, []);

  return (
    <StyledMobileNav>
      {mobileMenu === true ? (
        <div>
          <button className="mobileNav">
            <i className="mobileIcon">
              <BsList />
            </i>
          </button>
          <div>안녕하세요</div>
        </div>
      ) : (
        <div>모바일</div>
      )}
    </StyledMobileNav>
  );
};
export default MobileNav;

const StyledMobileNav = styled.div`
  float: right;
  display: flex;
  width: 80%;
  margin-left: 20%;

  scroll-behavior: smooth;

  .mobileNav {
    float: right;
    display: flex;
    position: fixed;
    right: 15px;
    bottom: 15px;
    z-index: 999;
    align-items: center;
    text-align: center;
    background: #149ddd;
    color: black;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    border: none;
    transition: all 0.4s;
    cursor: pointer;

    i {
      position: absolute;
      left: 15%;
      top: 15%;
      font-size: 28px;
      color: #fff;
      line-height: 0;
    }
  }

  .mobileIcon:hover {
    background: #f6a7b4;
    color: #fff;
  }
  .mobileIcon:active {
    visibility: visible;
    opacity: 1;
  }
`;
