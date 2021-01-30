import React, {FC} from 'react';
import styled from "styled-components";
import { NavLink } from "react-router-dom";


interface LinksProps {
    labelName: string,
    linkText: string,
    link: string
}

export const Links:FC<LinksProps> = ({labelName, linkText, link}) => {
    return (
        <LinksWrapper>
            <StyledText>{labelName}</StyledText>
            <NavLink to={link}><StyledLink>{linkText}</StyledLink></NavLink>
        </LinksWrapper>
    )
}

const LinksWrapper = styled.div`
    justify-content: center;
    text-align: -webkit-center;
`;

const StyledLink = styled.span`
    font-family: Avenir;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #E4163A;
    text-decoration: underline;
    `;

const StyledText = styled.span`
    font-family: Avenir;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
`
