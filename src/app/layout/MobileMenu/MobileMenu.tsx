import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { ColorConstants } from "@/styles/colorConstants";

interface MobileMenuProps {
  showMobileMenu: boolean;
  toggleMobileMenu: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  showMobileMenu,
  toggleMobileMenu,
}) => {
  return (
    <Wrapper showMobileMenu={showMobileMenu}>
      <CloseMenuIcon onClick={toggleMobileMenu}>
        <AiOutlineClose />
      </CloseMenuIcon>
      <Menu showMobileMenu={showMobileMenu}>
        <MenuItem>
          <CustomNavLink href="/" onClick={toggleMobileMenu}>
            Home
          </CustomNavLink>
        </MenuItem>
        <MenuItem>
          <CustomNavLink href="/" onClick={toggleMobileMenu}>
            About
          </CustomNavLink>
        </MenuItem>
        <MenuItem>
          <CustomNavLink href="/" onClick={toggleMobileMenu}>
            Skills
          </CustomNavLink>
        </MenuItem>
        <MenuItem>
          <CustomNavLink href="/" onClick={toggleMobileMenu}>
            Projects
          </CustomNavLink>
        </MenuItem>
        <MenuItem>
          <CustomNavLink href="/" onClick={toggleMobileMenu}>
            Contact
          </CustomNavLink>
        </MenuItem>
      </Menu>
    </Wrapper>
  );
};

const Wrapper = styled.nav<{ showMobileMenu: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  visibility: ${(props) => (props.showMobileMenu ? "visible" : "hidden")};
  z-index: 200;
  height: 100vh;
  background-color: ${ColorConstants.primary};
`;

const CloseMenuIcon = styled.div`
  position: absolute;
  cursor: pointer;
  width: 24px;
  height: 24px;
  right: 22px;
  top: 18px;
  z-index: 1;
`;

const Menu = styled.ul<{ showMobileMenu: boolean }>`
  display: flex;
  list-style-type: none;
  transform: ${(props) =>
    props.showMobileMenu ? "translateY(0)" : "translateY(-100%)"};
  transition: 0.5s ease-in-out;
  flex-direction: column;
  padding-top: 45px;
`;

const MenuItem = styled.li`
  margin-bottom: 4%;
`;

const CustomNavLink = styled(Link)`
  color: ${ColorConstants.white};
  padding: 0 20px;
`;
