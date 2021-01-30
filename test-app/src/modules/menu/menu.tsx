import React from 'react'
import styled from 'styled-components'
import {ReactComponent as TeamsIcon} from '../../assets/img/player.svg';
import {ReactComponent as PlayerIcon} from "../../assets/img/teams.svg";
import {ReactComponent as LogoutIcon} from "../../assets/img/logoutIcon.svg";
import {MenuItem} from "../../components/ui/menuItem";
import {UserInfo} from "../header/userInfo";


export const Menu = () => {

    return (
        <MenuContainer>
            <UserInfoWrapper>
                <UserInfo/>
            </UserInfoWrapper>
            <MenuItem text='Teams' link={"/teams"}><TeamsIcon/></MenuItem>
            <MenuItem text='Players' link={"/players"}><PlayerIcon/></MenuItem>
            <LogoutWrapper>
                <MenuItem text='Logout' link={"/teams"}><LogoutIcon/></MenuItem>
            </LogoutWrapper>
        </MenuContainer>
    )
}

const MenuContainer = styled.div`
  background-color: #ffffff;
  min-width: 140px;
  min-height: 100%;
  @media screen and (max-width: 1110px) {
    width: 201px;
  }
`

const LogoutWrapper = styled.div`
  position: absolute;
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