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
            <ImageWrapper>
                <AuthImage>{image}</AuthImage>
            </ImageWrapper>
        </StyledContainer>
    )
};

const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.38fr;
    height: 100vh;
    
    @media screen and (max-width: 1110px) {
      grid-template-columns: 1fr;
    }

`;

const AuthImage = styled.div`
    display: block;
    margin: auto;
`;

const FormLayout = styled.form`
    width: 366px;
    justify-self: center;
    align-self: center;
    margin: 24px;
    max-width: 366px;
    width: -webkit-fill-available;
`;

const FormTitle = styled.h1`
    font-size: 36px;
    line-height: 49px;
    margin: 0 0 32px 0;
    color: #344472;
    font-style: normal;
    font-weight: normal;
`;

const ImageWrapper = styled.div`
    background: #F5FBFF;
    display: flex;
    
        @media screen and (max-width: 1110px) {
      display: none;
    }
`;
