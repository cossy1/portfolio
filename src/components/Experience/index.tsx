import React from "react";
import styled from "styled-components";
import { ColorConstants } from "@/styles/colorConstants";
import { BsCodeSlash } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { Space } from "antd";

const StyledExperience = styled.div`
  background: ${ColorConstants.secondary};
  width: 100%;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  flex-wrap: wrap;

  .experience {
    background: ${ColorConstants.primary};
    padding: 40px;
    max-width: 250px;
    display: flex;
    justify-content: center;

    div {
      display: flex;
      justify-content: center;
      align-items: start;
      flex-direction: column;
      color: ${ColorConstants.tertiary};
      font-size: 20px;

      h2 {
        font-size: 30px;
      }
    }
  }

  .code {
    color: ${ColorConstants.onSecondary};
    max-width: 400px;
  }

  @media (max-width: 768px) {
    justify-content: start;
  }
`;

export const Experience = () => {
  return (
    <StyledExperience>
      <div className="experience">
        <div>
          <h2>3+</h2>
          <p>Years</p>
          <p>Working</p>
          <p>Experience</p>
        </div>
      </div>
      <div className="code">
        <Space direction="vertical" size="middle">
          <BsCodeSlash color="white" size={25} />
          <h2>Front End Developer</h2>
          <p>I specialize in Javascript, Typescript, React.Js, Next.Js</p>
        </Space>
      </div>
      <div className="code">
        <Space direction="vertical" size="middle">
          <CgWebsite color="white" size={25} />
          <h2>Web Developer</h2>
          <p>
            I design fully functional and responsive website with my
            professional knowledge on Javascript.
          </p>
        </Space>
      </div>
    </StyledExperience>
  );
};
