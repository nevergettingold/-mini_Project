import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Btn } from "../elements/element";

const Header = (props) => {
  const navigate = useNavigate();
  const is_login = true;

  return (
    <StyleHeader>
      <div className="header-top">
        <div className="header-logo">
          <h2>
            <span onClick={() => navigate("/")}>지금 뭐해?</span>
          </h2>
        </div>
      </div>
      <div className="header-bottom">
        <div className="btn-group">
          {(() => {
            if (is_login === true) {
              return (
                <React.Fragment>
                  <Btn text={"My Page"} _click={() => navigate("/mypage")} />
                  <Btn text={"Logout"} />
                </React.Fragment>
              );
            } else {
              return (
                <React.Fragment>
                  <Btn text={"Login"} />
                  <Btn text={"Sign up"} />
                </React.Fragment>
              );
            }
          })()}
        </div>
      </div>
    </StyleHeader>
  );
};
const StyleHeader = styled.header`
  padding: 1rem 0.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #dddddd;
  .header-top {
    display: flex;
    justify-content: center;
    .header-logo {
      font-size: 2rem;
      line-height: 1;
      h2 {
        strong {
          margin: 0;
          font-size: 6rem;
          font-weight: bold;
          letter-spacing: 0.2rem;
        }
        span {
          margin: 0 0.2rem;
        }
      }
    }
  }
  .header-bottom {
    display: flex;
    justify-content: flex-end;
    .btn-group {
      button + button {
        margin-left: 1rem;
      }
    }
  }
`;

export default Header;
