import React from "react";
import styled from "styled-components";
import { ColorConstants } from "@/styles/colorConstants";
import { Divider, Space } from "antd";
import Image from "next/image";

const StyledCard = styled.div`
  background: ${ColorConstants.primary};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;

  h2 {
    color: ${ColorConstants.tertiary};
    font-size: 57px;
  }

  .left-side {
    width: 50%;
    .name {
      color: ${ColorConstants.darkAccent};
      font-size: 40px;
      font-weight: bold;
    }
    div {
      font-size: 90px;
      font-weight: bold;
      line-height: 64px;
    }
  }

  span {
    color: ${ColorConstants.onPrimary};
    font-size: 60px;
  }

  p {
    font-size: 10px;
    color: ${ColorConstants.onPrimary};
  }

  .right-side {
    width: 50%;
    height: 100%;
  }
`;

const StyledDivider = styled(Divider)`
  background: ${ColorConstants.accent};
  height: 20px;
  margin-bottom: 5px;
`;

const StyledButton = styled.div`
  border-radius: 6px;
  border: 1px solid ${ColorConstants.onSecondary};
  font-size: 16px !important;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 40px;
  cursor: pointer;
  color: ${ColorConstants.white};

  :hover {
    background: ${ColorConstants.darkAccent};
    border: none;
  }
`;

export const HomeCard = () => {
  return (
    <StyledCard>
      <div className="left-side">
        <h2>Hey,</h2>
        <div className="name">
          I&apos;m <span>Onyekwuo</span>
        </div>
        <div>Cosmas</div>
        <Space size="small" align="center">
          <p>Frontend Developer</p>
          <StyledDivider type="vertical" />
          <p>Web Developer</p>
        </Space>
        <StyledButton>Hire Me</StyledButton>
      </div>

      <div className="right-side">
        <Image
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScPaF540chdPfHnqnOm7aBrBLVBCjF-2F3iw&usqp=CAU/"
          }
          alt="image"
          height={500}
          width={500}
        />
      </div>
    </StyledCard>
  );
};
