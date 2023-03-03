import React from "react";
import styled from "styled-components";
import { ColorConstants } from "@/styles/colorConstants";
import { ProjectCard } from "@/components/Projects/ProjectCard";

const StyledProjects = styled.div`
  background: ${ColorConstants.primary};
  padding: 10px 40px;

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
    h2 {
      font-size: 64px;
    }
  }

  .projects {
    margin: 0 auto;
    width: 70%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    .projects {
      width: 100%;
    }
  }

  @media (max-width: 760px) {
    h2 {
      font-size: 50px !important;
    }
    .projects {
      width: 100%;
    }
  }
`;

const myProjects = [
  { src: "/images/altmall.png", url: "https://altmall.ng/" },
  { src: "/images/metacomic.png", url: "https://metacomic.com/" },
  { src: "/images/wakaplug.png", url: "https://wakaplug.com/" },
  { src: "/images/pointchecka.png", url: "https://pointchecka.vercel.app/" },
  { src: "/images/pra.png", url: "https://www.ponyracingauthority.co.uk/" },
];

export const Projects = () => {
  return (
    <StyledProjects>
      <div>
        <h2>PROJECTS</h2>
        <p>Checkout some of my works</p>
      </div>

      <div className="projects">
        {myProjects.map(({ src, url }, index) => (
          <ProjectCard key={index} src={src} url={url} />
        ))}
      </div>
    </StyledProjects>
  );
};
