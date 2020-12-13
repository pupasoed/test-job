import React, {FC, InputHTMLAttributes, ReactNode} from 'react'
import styled from "styled-components";
import {ReactComponent as EyeIcon} from "../assets/img/eye.svg";

// import { UseFormMethods } from "react-hook-form";

interface AuthLayoutProps
    extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    label?: string;
    icon?: ReactNode;
    inputType: "email" | "password" | "login";
    name?: string;
    register?: any;
    errors?: any;
}

export const Input: FC<AuthLayoutProps> = ({
                                               label,
                                               placeholder,
                                               inputType,
                                               errors = {},
                                               name,
                                               register,
                                               ...inputProps
                                           }) => {
    return (
        <InputWrapper>
            {label && <StyledLabel className="label">{label}</StyledLabel>}
            <StyledInput
                placeholder={placeholder}
                type={inputType}
                ref={register}
                name={name}
                {...inputProps}/>
            {/*{error && (<p> {error} </p> )}*/}
            {/*{<Eye>EyeIcon</Eye>}*/}
            <Eye/>
        </InputWrapper>
    )
};


const StyledInput = styled.input`
  font-family: Avenir;
  background: #F6F6F6;
  border-radius: 4px;
  height: 40px;
  margin-bottom: 24px;
  border: aliceblue;
  padding-left: 10px;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #D9D9D9;
  }

`;

const StyledLabel = styled.label`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #707070;
  margin-bottom: 8px;
`;

const InputWrapper = styled.div`
  display: grid;
`;

const Eye = styled.a`
  display: flex;
  background: url(../assets/img/eye.svg) no-repeat scroll 7px 7px;
`