import React, {FC, ReactNode} from 'react'
import styled from "styled-components";

interface ButtnProps {
    buttonName: string
}

export const Button: FC<ButtnProps> = ({buttonName}) =>
    <StyledButton>{buttonName}</StyledButton>;


const StyledButton = styled.button`
    border-radius: 3px;
`;
