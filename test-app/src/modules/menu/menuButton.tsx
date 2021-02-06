import React from 'react'
import { ReactComponent as MenuIcon } from "../../assets/img/menuIcom.svg";
import styled from "styled-components";

export const MenuButton = ({menuHandler}) => {

    return(
        <MenuButtonWrapper onClick={menuHandler}>
            <MenuIcon/>
        </MenuButtonWrapper>
    )
}

const MenuButtonWrapper = styled.i`
  padding-left: 12px;
  top: 20px;
  align-self: center;
  display: ${props => props.visibal ? 'none' : 'flex'};
  position: absolute;

  @media screen and (min-width: 1110px) {
    display: none;
  }
`