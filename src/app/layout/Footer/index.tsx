import React from "react";
import styled from "styled-components";
import { ColorConstants } from "@/styles/colorConstants";
import { Space } from "antd";
import Link from "next/link";
import { BsLinkedin, BsTwitter, BsGithub, BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from 'react-icons/md';

const StyledFooter = styled.div`
  background: ${ColorConstants.primary};
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  color: ${ColorConstants.onSecondary};
  font-size: 16px;
 // text-align: center;

  .header {
    margin-bottom: 30px;
    font-size: 20px;
  }
  
  span{
    font-size: 14px;
    margin-left: 10px;
  }
  
`;

const StyledLink = styled(Link)``;

export const AppFooter = () => {
  return (
    <StyledFooter>
      <div>
        <div className="header">Projects</div>
        <Space size="large" direction="vertical">
          <StyledLink href="https://altmall.ng/" target="_blank">
            Altmall
          </StyledLink>
          <StyledLink href="https://wakaplug.com/" target="_blank">
            WakaPlug
          </StyledLink>
          <StyledLink href="https://pointchecka.vercel.app/" target="_blank">
            PointChecka
          </StyledLink>
          <StyledLink href="https://metacomic.com/" target="_blank">
            MetaComic
          </StyledLink>
        </Space>
      </div>
      <div>
        <div className="header">Skills</div>
        <Space size="large" direction="vertical">
          <p>JavaScript</p>
          <p>TypeScript</p>
          <p>ReactJs</p>
          <p>NextJs</p>
        </Space>
      </div>
      <div>
        <div className="header">Contact</div>
        <Space size="large" direction="vertical">
          <div>
            <MdEmail size={20} />
            <span>
              Onyekwuocosmas@gmail.com
            </span>
          </div>
          <div>
            <BsTelephoneFill size={20} />
            <span>
              +2348174518987
            </span>
          </div>
        </Space>
      </div>
      <div>
        <div className="header">Follow Me</div>
        <Space size="large" direction="vertical" className='follow'>
          <StyledLink
              href="https://www.linkedin.com/in/onyekwuo-cosmas-552b59157/"
              target="_blank"
          >
            <BsLinkedin size={20} />
          </StyledLink>
          <StyledLink href="https://twitter.com/cossy_tech" target="_blank">
            <BsTwitter size={20} />
          </StyledLink>
          <StyledLink href="https://github.com/cossy1" target="_blank">
            <BsGithub size={20} />
          </StyledLink>
        </Space>
      </div>
    </StyledFooter>
  );
};
