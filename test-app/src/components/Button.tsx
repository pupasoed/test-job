import React, {FC} from 'react'
import styled from "styled-components";

interface ButtnProps {
    buttonName: string
}

export const Button: FC<ButtnProps> = ({buttonName}) =>
    <StyledButton>{buttonName}</StyledButton>;


const StyledButton = styled.button`
    background: #E4163A;
    border-radius: 4px;
    color: #FFFFFF;
    font-family: Avenir;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    border: 0;
    height: 40px;
`;
