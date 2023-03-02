import React from "react";
import styled from "styled-components";
import { ColorConstants } from "@/styles/colorConstants";

const StyledProjects = styled.div`
  background: ${ColorConstants.primary};

  div:nth-child(1) {
    color: ${ColorConstants.white};
    font-size: 64px;
    font-weight: 700;
    margin: 40px 0;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;

    p {
      font-size: 10px;
    }
  }
`;

export const Projects = () => {
  return (
    <StyledProjects>
      <div>
        <h2>PROJECTS</h2>
        <p>Checkout some of my works</p>
      </div>
    </StyledProjects>
  );
};
