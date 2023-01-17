import React, { useState } from "react";
import styled from "styled-components";
import { MobileMenu } from "@/app/layout/MobileMenu/MobileMenu";
import { RxHamburgerMenu } from "react-icons/rx";

export const MobileMenuComponent = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  return (
    <Wrapper>
      <HamburgerIcon onClick={toggleMobileMenu}>
        <RxHamburgerMenu />
      </HamburgerIcon>
      <MobileMenu
        showMobileMenu={showMobileMenu}
        toggleMobileMenu={toggleMobileMenu}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

const HamburgerIcon = styled.div`
  cursor: pointer;
  position: absolute;
  background-color: unset;
  width: 24px;
  height: 24px;
  right: 22px;
  top: 32px;

  @media (min-width: 768px) {
    display: none;
  }
`;
