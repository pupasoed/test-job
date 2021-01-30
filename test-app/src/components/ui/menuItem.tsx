import React, {FC} from 'react';
import styled from 'styled-components'
import { Link } from "react-router-dom";



interface MenuItemInterface {
    link: string;
    text?: string;
    children?: any;
    type?: string
}

export const MenuItem:FC<MenuItemInterface> = ({text, link, type, children}) => {
    return(
        <Link to={link}>
            <ItemWrapper type={type}>
                {children}
                <MenuItemText>{text}</MenuItemText>
            </ItemWrapper>
        </Link>
    )
}

const ItemWrapper = styled.div`
  display: grid;
  justify-items: center;
  padding-top: ${props => props.type ? '0' : '37px'};
  @media screen and (max-width: 1110px) {
    display: flex;
    margin-left: 21px;
  }
`

const MenuItemText = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: #9C9C9C;
  @media screen and (max-width: 1110px) {
    align-self: center;
    margin-left: 8px;
  }
`