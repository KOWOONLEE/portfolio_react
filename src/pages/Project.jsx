import { useParams } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Project = ({ project, setProject }) => {
  const { id } = useParams();
  const originId = project.find((item) => item.id === id);
  console.log(originId);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <StyledProject>
      <div className="projectNav">
        <div>
          <h2> PROJECT DETAILS</h2>
        </div>
        <div className="sideMenu">
          <a href="/">Main Page</a> <span>/ Portfolio Details </span>
        </div>
      </div>
      <div className="contentWrap">
        <div className="slideImg">
          안녕하세요
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
        <div className="slideContent">내용 블라블라</div>
      </div>
    </StyledProject>
  );
};
export default Project;

const StyledProject = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;

  .projectNav {
    display: flex;
    width: 90%;
    height: 10vh;
    background-color: #f0eeee;
    align-items: center;
    margin: 0 auto;
    padding: 0 20px 0 20px;
    box-shadow: 0 5px 5px -4px gray;
    justify-content: space-between;

    h2 {
      /* font-family: "Kanit", sans-serif; */
      font-size: 1.7em;
      font-weight: 600;
      color: #205878;
      text-shadow: 1px 1px 1px #205878;
    }
  }
  .sideMenu {
    font-size: 1.2em;
    a {
      text-decoration: none;
      color: #38b2ea;
      font-weight: bold;
    }
    a:hover {
      color: #f6a7b4;
    }
  }
  .contentWrap {
    display: flex;
    width: 90%;
    margin: 0 auto;
  }
  .slideImg {
    width: 70%;
    height: 70vh;
    background-color: #38b2ea;
  }
  .slideContent {
    width: 30%;
    background-color: #f6a7b4;
  }
`;
