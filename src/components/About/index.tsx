import React from "react";
import styled from "styled-components";
import { ColorConstants } from "@/styles/colorConstants";
import { Space } from "antd";

const StyledAbout = styled.div`
  background: ${ColorConstants.primary};
  padding: 10px 40px;

  h2 {
    font-size: 64px;
    color: ${ColorConstants.white};
    text-align: center;
  }

  div {
    display: flex;
    align-items: start;
    justify-content: space-around;
    gap: 10px; 

    .header {
      color: ${ColorConstants.darkAccent};
      font-size: 32px;
      font-weight: 700;
    }

    div {
      color: ${ColorConstants.onTertiary};
      font-size: 16px;
    }

    .info {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: space-between;
      gap: 20px;
    }
    }
  }

  span {
    color: ${ColorConstants.tertiary};
    font-size: 16px;
  }
  
  @media(max-width: 768px){
    div {
     flex-direction: column;
      justify-content: center;
      width: 100%;

      .header {
        font-size: 20px;
      }
  }
    span {
      font-size: 12px;
    }
    h2 {
      font-size: 40px;
    }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  .wrapper {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    gap: 20px;
  }

  p {
    font-size: 16px;
    color: ${ColorConstants.tertiary};
    line-height: 28px;
  }

  @media (max-width: 768px) {
    p {
      font-size: 12px;
      line-height: 18px;
    }
  }
`;

export const About = () => {
  return (
    <StyledAbout>
      <h2>About Me</h2>

      <div>
        <StyledDiv>
          <Space direction="vertical" size="middle">
            <div className="wrapper">
              <div className="header">IDENTITY INFORMATION</div>
              <div className="info">
                <div>
                  FULL NAME:
                  <span>ONYEKWUO ANAYOCHUKWU COSMAS</span>
                </div>
                <div>
                  NATIONALITY:
                  <span>NIGERIAN</span>
                </div>
                <div>
                  STATE OF ORIGIN:
                  <span>IMO</span>
                </div>
              </div>
            </div>
          </Space>

          <Space direction="vertical" size="middle">
            <div className="wrapper">
              <div className="header">ACADEMIC BACKGROUND</div>
              <div className="info">
                <div>
                  O LEVELS:
                  <span>
                    WASSCE (GREAT MICHAEL&apos;S COMPREHENSIVE COLLEGE, LAGOS)
                  </span>
                </div>
                <div>
                  A LEVELS:
                  <span>
                    {" "}
                    HND. COMPUTER SCIENCE (YABA COLLEGE OF TECHNOLOGY, LAGOS)
                  </span>
                </div>
              </div>
            </div>
          </Space>
        </StyledDiv>

        <StyledDiv>
          <div className="wrapper">
            <div className="header">CAREER OBJECTIVE</div>
            <p>
              To contribute immensely to the software Engineering and
              development sector worldwide through intensive research in the
              software development field.
            </p>
            <p>
              I am an enthusiastic, disciplined and self motivated individual
              with a great passion to learn more about software development
              mechanics.
            </p>
            <p>
              I have been professionally trained perform effectively and
              efficiently under any condition.
            </p>
            <p>
              I’m also an analytic thinker, as such, i can break down complex
              tasks and achieve efficient results timely.
            </p>
          </div>
        </StyledDiv>
      </div>
    </StyledAbout>
  );
};
