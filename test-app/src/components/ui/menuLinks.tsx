import React, {FC, useEffect, useState} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

interface MenuLinksInterface {
    link: string;
    text?: string;
    children?: any;
    type?: string;
    pathPage?: string
}

export const MenuLinks:FC<MenuLinksInterface> = ({text, link, type, pathPage, children}) => {

    const [isActive, setIsActive] = useState(false)
    useEffect(() => {
        if(pathPage){
            if(pathPage?.slice(1, -1) === text?.toLowerCase()){
                setIsActive(true)
            }
            else setIsActive(false)
        }

        else setIsActive(false)
    }, [pathPage, text])

    return(
        <LinkStyled to={link}>
            <ItemWrapper type={type} isActive={isActive} >
                {children}
                <MenuItemText text={text} isActive={isActive} >{text}</MenuItemText>
            </ItemWrapper>
        </LinkStyled>
    )
};

const ItemWrapper = styled.div`
  display: grid;
  justify-items: center;
  padding-top: ${props => props.type ? '0' : '37px'};
  path{
    fill: ${(props) => props.isActive ? '#E4163A' : 'null'}}
  
  @media screen and (max-width: 1110px) {
    display: flex;
    margin-left: 21px;
  }
`;
const MenuItemText = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.isActive ? '#E4163A' : '#9C9C9C'};
  @media screen and (max-width: 1110px) {
    align-self: center;
    margin-left: 8px;
  }
`;
const LinkStyled = styled(Link)`
  text-decoration: none;
`;
