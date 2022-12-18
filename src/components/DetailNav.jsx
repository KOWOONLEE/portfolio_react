import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const DetailNav = () => {
  const navigate = useNavigate();

  return (
    <StyledNav>
      <div className="projectNav">
        <div>
          <h2> PROJECT DETAILS</h2>
        </div>
        <div className="middleMenu">
          <span
            onClick={() => {
              navigate("/project/1st");
            }}
          >
            first
          </span>
          <span
            onClick={() => {
              navigate("/project/2nd");
            }}
          >
            second
          </span>
          <span
            onClick={() => {
              navigate("/project/3rd");
            }}
          >
            third
          </span>
          <span
            onClick={() => {
              navigate("/project/4th");
            }}
          >
            fourth
          </span>
        </div>
        <div className="sideMenu">
          <a href="/">Main Page로 이동</a> <span>/ Portfolio Details </span>
        </div>
      </div>
    </StyledNav>
  );
};
export default DetailNav;

const StyledNav = styled.div`
  .projectNav {
    display: flex;
    width: 90%;
    height: 10vh;
    /* background-color: #f0eeee; */
    background-color: black;
    align-items: center;
    margin: 0 auto;
    padding: 0 20px 0 20px;
    box-shadow: 0 5px 5px -4px gray;
    justify-content: space-between;

    h2 {
      /* font-family: "Kanit", sans-serif; */
      font-size: 1.7em;
      font-weight: 600;
      color: white;
      text-shadow: 1px 1px 1px #205878;
    }
  }
  .middleMenu {
    color: white;

    span {
      font-size: 1.2em;
      font-weight: bold;
      margin-right: 40px;
    }
    span:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  .sideMenu {
    font-size: 1.2em;

    a {
      text-decoration: none;
      color: white;
      font-weight: bold;
    }
    a:hover {
      text-decoration: underline;
    }
    span {
      color: #d9d2d2;
    }
  }
`;
