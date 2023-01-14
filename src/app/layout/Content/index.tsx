import React, {ReactNode} from "react";
import styled from "styled-components";
import {ColorConstants} from "@/styles/colorConstants";

const StyledContent = styled.div`
  background: ${ColorConstants.secondary};
  min-height: 500px;
`;


interface AppContentProp {
    children: ReactNode | ReactNode[];
}

export const AppContent: React.FC<AppContentProp> = ({children}) => {

    return(
        <StyledContent>
            {children}
        </StyledContent>
    );
}