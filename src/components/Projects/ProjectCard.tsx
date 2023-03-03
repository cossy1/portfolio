import React from "react";
import styled from "styled-components";
import { Button, Card } from "antd";
import Image from "next/image";
import { ColorConstants } from "@/styles/colorConstants";

const StyledCard = styled(Card)`
  width: 300px;
  max-height: 300px;

  .ant-card-cover {
    margin: 0 !important;
  }

  .ant-card-body {
    width: 100%;
  }

  .btn-link {
    width: 100%;
    margin: 0 !important;
  }
`;

const StyledButton = styled(Button)`
  background: ${ColorConstants.darkAccent};
  height: 40px;

  :hover {
    background: ${ColorConstants.darkAccent} !important;
  }
`;

interface IProjectCardProps {
  src: string;
  url: string;
}

export const ProjectCard: React.FunctionComponent<IProjectCardProps> = ({
  url,
  src,
}) => {
  return (
    <StyledCard
      hoverable
      cover={<Image alt="example" src={src} height={220} width={300} />}
    >
      <div className="btn-link">
        <StyledButton type="primary" block href={url} target="_blank">
          Link
        </StyledButton>
      </div>
    </StyledCard>
  );
};
