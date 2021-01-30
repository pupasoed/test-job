import React, {FC, ReactNode} from 'react'
import styled from "styled-components";
import {FieldError} from "react-hook-form";

interface AuthLayoutProps{
    placeholder?: string;
    label?: string;
    icon?: ReactNode;
    inputType: "email" | "password" | "login";
    name?: string;
    register?: any;
    error?: FieldError;
}

export const Input: FC<AuthLayoutProps> = ({
                                               label,
                                               placeholder,
                                               inputType,
                                               error,
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
                error={error}
                {...inputProps}
            />
            <ErrorMassage> {error?.message} </ErrorMassage>
            <Eye/>
        </InputWrapper>
    )
}


const StyledInput = styled.input <{error: FieldError}>`
  font-family: Avenir;
  background: #F6F6F6;
  border-radius: 4px;
  height: 40px;
  border-width: 1px;
  border-color: ${props => props.error ? '#FF768E' : 'aliceblue'};
  border-style: solid;
  padding-left: 10px;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #D9D9D9;
  }`;

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
  margin-bottom: 24px;
`;

const Eye = styled.a`
  display: flex;
  background: url(../../assets/img/eye.svg) no-repeat scroll 7px 7px;
`

const ErrorMassage = styled.div`
  margin: 0;
  color: #FF768E;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
`