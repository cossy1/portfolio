import styled from "styled-components";
import {ColorConstants} from "@/styles/colorConstants";
import {Space} from "antd";

const StyledHeader = styled.div`
  background: ${ColorConstants.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
  
  .logo-div{
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
  
`;

export const AppHeader = () => {

    return(
        <StyledHeader>
            <div className='logo-div'>
                OC
            </div>

            <div>
                <Space size='large' wrap={true}>
                    <div>Home</div>
                    <div>About</div>
                    <div>Skills</div>
                    <div>Projects</div>
                    <div>Contact</div>
                </Space>
            </div>
        </StyledHeader>
    );
}