import styled from "styled-components";
import { ColorConstants } from "@/styles/colorConstants";
import { Space } from "antd";
import { MobileMenuComponent } from "@/app/layout/MobileMenu";
import Link from "next/link";

const StyledHeader = styled.div`
  background: ${ColorConstants.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;

  .logo-div {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: ${ColorConstants.accent};
    color: ${ColorConstants.black};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
  }

  @media (max-width: 768px) {
    .tabs {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .mobile-menu {
      display: none;
    }
  }
`;

export const AppHeader = () => {
  return (
    <StyledHeader>
      <div className="logo-div">
        <Link href={"/"}>OC</Link>
      </div>

      <div className="mobile-menu">
        <MobileMenuComponent />
      </div>

      <div className="tabs">
        <Space size="large" wrap={true}>
          <Link href={"/"}>Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Skills</Link>
          <Link href="/">Projects</Link>
          <Link href="/">Contact</Link>
        </Space>
      </div>
    </StyledHeader>
  );
};
