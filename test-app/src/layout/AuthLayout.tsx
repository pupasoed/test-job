import React, {FC, ReactNode} from 'react'
import styled from "styled-components";

interface AuthLayoutProps {
    image: ReactNode,
    title?:string
}

export const AuthLayout:FC<AuthLayoutProps> = ({image, title, children}) => {

    return(
        <StyledContainer>
            <FormLayout>
                <FormTitle>{title}</FormTitle>
                {children}
            </FormLayout>
            <AuthImage>{image}</AuthImage>
        </StyledContainer>
    )
};

const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.3fr;
    height: 100vh;
`;

const AuthImage = styled.div`
    margin: auto;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
`;

const FormLayout = styled.form`
    width: 366px;
    justify-self: center;
    align-self: center;
`;

const FormTitle = styled.h1`
    font-size: 36px;
    line-height: 49px;
    margin-bottom: 32px;
`
