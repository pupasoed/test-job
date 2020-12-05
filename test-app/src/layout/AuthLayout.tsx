import React, {FC, ReactNode} from 'react'
import styled from "styled-components";

interface AuthLayoutProps {
    image: ReactNode,
    title?:string
}

export const AuthLayout:FC<AuthLayoutProps> = ({image, title="SingIn", children}) => {

    return(
        <StyledContainer>
            <div>
                <h1>{title}</h1>
                {children}
            </div>
            <div>{image}</div>
        </StyledContainer>
    )
};

const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.3fr;
    height: 100vh;
`;
