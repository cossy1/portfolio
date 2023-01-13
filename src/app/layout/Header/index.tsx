import styled from "styled-components";
import {ColorConstants} from "@/styles/colorConstants";

const StyledHeader = styled.div`
  background: ${ColorConstants.background};
`;

export const AppHeader = () => {

    return(
        <StyledHeader>
            This is the HEADER!!!
        </StyledHeader>
    );
}