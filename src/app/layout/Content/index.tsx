import React, {ReactNode} from "react";
import styled from "styled-components";
import {ColorConstants} from "@/styles/colorConstants";

const StyledContent = styled.div`
  background: ${ColorConstants.background};
`;


interface AppContentProp {
    children: ReactNode | ReactNode[];
}

export const AppContent: React.FC<AppContentProp> = ({children}) => {

    console.log({children})

    return(
        <StyledContent>
            This is the CONTENT!!!
        </StyledContent>
    );
}