import React from "react";
import styled from "styled-components";
import { ColorConstants } from "@/styles/colorConstants";
import { Divider, Space } from "antd";

const StyledCard = styled.div`
  background: ${ColorConstants.primary};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    color: ${ColorConstants.tertiary};
    font-size: 57px;
  }
  
  .custom-img {
    object-fit: cover;
    width: 100%;
    height: 500px !important;
  }

  .left-side {
    width: 50%;
    margin-right: 10px;
    padding: 40px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

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
    
    .custom-image{
     width: 100%;
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
  
  @media(max-width: 768px){
    flex-direction: column;
    
    h2{
      font-size: 30px;
    }
    
    span{
      font-size: 40px;
    }

    .left-side {
      width: 100%;
      padding: 20px;
      .name {
        font-size: 20px;
      }
      div {
        font-size: 40px;
        line-height: 40px;
      }
    }
  }

  @media (min-width: 770px) and (max-width:1100px) {
    .left-side {
      .name {
        font-size: 16px;
      }
      div {
        font-size: 50px;
        line-height: 40px;
      }
    }

    span {
      font-size: 40px;
    }

    h2 {
      font-size: 30px;
    }
  }
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

  @media (max-width: 550px) {
    width: 100%;
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

      <img
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScPaF540chdPfHnqnOm7aBrBLVBCjF-2F3iw&usqp=CAU/"
        }
        alt="image"
        className="custom-img"
      />
    </StyledCard>
  );
};
