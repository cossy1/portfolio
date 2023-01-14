import React, {ReactNode} from "react";
import styled from "styled-components";
import {Button} from "antd";

const StyledButton = styled(Button)`
  font-size: 10px;
`;


interface IAppButtonProps {
    text: string;
    type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'default';
}

export const AppButton: React.FC<IAppButtonProps> = ({type = 'default', text}) => {

    return(
        <StyledButton type={type}>
            {text}
        </StyledButton>
    );
};