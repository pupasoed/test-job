import React, {FC} from 'react'
import styled from "styled-components";

interface ButtonProps {
    buttonName: string
}

export const Button: FC<ButtonProps> = ({buttonName}) =>
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
  border: 0;
  height: 40px;
  width: 100%;
  align-items: center;

  &:Hover {
    background: #FF5761;
  }
  &:active {
    background: #C60E2E;
  }
  &:focus {
    outline: none;
  }
`;
