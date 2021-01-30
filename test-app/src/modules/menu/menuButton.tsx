import React, {useState} from 'react'
import { ReactComponent as MenuIcon } from "../../assets/img/menuIcom.svg";
import styled from "styled-components";


export const MenuButton = () => {
    const [menu, setMenu] = useState(false)
    const menuToggle = () => setMenu(!menu)

    return(
        <MenuButtonWrapper onClick={menuToggle} visibal={menu} >
            <MenuIcon/>
        </MenuButtonWrapper>
    )
}

const MenuButtonWrapper = styled.i`
  padding-left: 12px;
  align-self: center;
  display: ${props => props.visibal ? 'none' : 'flex'};
  
  @media screen and (min-width: 1110px) {
    display: none;
  }
`