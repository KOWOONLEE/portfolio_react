import styled from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";

const BottomToTop = () => {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <StyledBottomToTop>
      <button onClick={scrollToTop} className="topButton">
        <i className="topButtonDiv">
          <AiOutlineArrowUp />
        </i>
      </button>
    </StyledBottomToTop>
  );
};
export default BottomToTop;

const StyledBottomToTop = styled.div`
  display: flex;
  width: 80%;
  margin-left: 20%;
  padding: 20px;
  scroll-behavior: smooth;

  .topButton {
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

    i {
      position: absolute;
      left: 15%;
      top: 15%;
      font-size: 28px;
      color: #fff;
      line-height: 0;
    }
  }

  .topButton:hover {
    background: #f6a7b4;
    color: #fff;
  }
  .topButton:active {
    visibility: visible;
    opacity: 1;
  }
`;
