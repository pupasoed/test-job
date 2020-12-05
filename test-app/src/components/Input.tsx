import React, {FC, ReactNode} from 'react'
import styled from "styled-components";



interface AuthLayoutProps {
    placeholder: string
    label?: string
    icon?: ReactNode
    inputType: string
}

const Input:FC<AuthLayoutProps> = ({label, placeholder, inputType}) => {
    return(
        <div>
            {label && <StyledLabel className="label">{label}</StyledLabel>}
            <StyledInput placeholder={placeholder} type = {inputType}/>
        </div>
    )
};

export default Input

const StyledInput = styled.input`
    background: #F6F6F6;
    border-radius: 4px;
    height: 40px;
    margin-bottom: 24px;
    border: aliceblue;
    padding-left: 10px;
`;

const StyledLabel = styled.label`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #707070;
    margin-bottom: 8px;
`;