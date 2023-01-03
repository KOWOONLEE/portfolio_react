import styled from "styled-components";

import { BiMap } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { BsPhone } from "react-icons/bs";

const Contact = () => {
  return (
    <StyledContact>
      <section id="contact" className="contactSection">
        <div className="paddingMargin">
          <h1>Contact</h1>
          <p style={{ fontSize: "1.2em", lineHeight: "3vh" }}>
            연락처 관련 정보입니다.
          </p>
          <div className="contactWrap">
            <br />
            <div className="address">
              <i>
                <BiMap />
              </i>
              <div className="content">
                <strong>Address</strong>
                <br />
                <p>경기도 수원시 영통구 인계로</p>
              </div>
            </div>
            <div className="email">
              <i>
                <FiMail />
              </i>
              <div className="content">
                <strong>Email</strong>
                <br />
                <p>hhh3901@gmail.com</p>
              </div>
            </div>
            <div className="phone">
              <i>
                <BsPhone />
              </i>
              <div className="content">
                <strong>Phone</strong>
                <br />
                <p>010.2899.1625</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </StyledContact>
  );
};
export default Contact;

const StyledContact = styled.div`
  display: inline-block;
  align-items: center;
  justify-content: center;
  /* margin-bottom: 150px; */

  .contactWrap {
    display: inline-block;
    width: 23vw;
    height: 43vh;
    margin: 0 auto;
    background-color: white;
    box-shadow: 0px 0 10px gray;

    strong {
      font-size: 1.4em;
    }
    p {
      font-size: 1.2em;
    }

    i {
      font-size: 20px;
      color: #149ddd;
      float: left;
      width: 44px;
      height: 44px;
      background: white;
      display: flex;
      justify-content: center;
      margin-left: 20px;
      align-items: center;
      border-radius: 50px;
      transition: all 0.3s ease-in-out;
    }
  }
  .address {
    margin-top: 15px;
  }

  .content {
    margin-left: 70px;
  }

  @media screen and (max-width: 768px) {
    .contactWrap {
      width: 50vw;
    }
  }
`;
