import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {ReactComponent as TeamsIcon} from '../../assets/img/player.svg';
import {ReactComponent as PlayerIcon} from "../../assets/img/teams.svg";
import {ReactComponent as LogoutIcon} from "../../assets/img/logoutIcon.svg";
import {MenuLinks} from "../../components/ui/menuLinks";
import {UserInfo} from "../header/userInfo";
import {MenuButton} from "./menuButton";
import {getPlayersAction} from "../players/playersActions";
import { useDispatch } from 'react-redux'
import {loginActions} from "../auth/singIn/singInSlice";



export const Menu = () => {

    const [menuToggle, setMenuToggle] = useState(false)

    const menuHandler = () => {
        setMenuToggle(!menuToggle)
    }

    const dispatch = useDispatch();
    const logout = () => {
            dispatch(loginActions.logout())
    }

    return (
        <div>
            <MenuButton menuHandler={menuHandler}/>
            <MenuContainer visible={menuToggle}>
                <UserInfoWrapper>
                    <UserInfo/>
                </UserInfoWrapper>
                <MenuLinks text='Teams' link={"/teams"}><TeamsIcon/></MenuLinks>
                <MenuLinks text='Players' link={"/players"}><PlayerIcon/></MenuLinks>
                <LogoutWrapper onClick={logout}>
                    <MenuLinks text='Logout' link={"/teams"}><LogoutIcon/></MenuLinks>
                </LogoutWrapper>
            </MenuContainer>
        </div>
    )
}

const MenuContainer = styled.div`
  z-index: 1;
  background-color: #ffffff;
  min-width: 140px;
  min-height: 100%;
  @media screen and (max-width: 1110px) {
    min-width: 0;
    position: fixed;
    width: 201px;
    display: ${props => props.visible ? 'absolute' : 'none'}
  }
`

const LogoutWrapper = styled.div`
  position: fixed;
  bottom: 32px;
  width: 140px;

`

const UserInfoWrapper = styled.div`
  padding: 20px;
  border-bottom: 0.5px solid #9C9C9C;
  @media screen and (min-width: 1110px) {
    display: none;
  }
`
