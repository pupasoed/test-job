import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {ReactComponent as TeamsIcon} from '../../assets/img/player.svg';
import {ReactComponent as PlayerIcon} from "../../assets/img/teams.svg";
import {ReactComponent as LogoutIcon} from "../../assets/img/logoutIcon.svg";
import {MenuLinks} from "../../components/ui/menuLinks";
import {UserInfo} from "../header/userInfo";
import {MenuButton} from "./menuButton";
import {useDispatch} from 'react-redux'
import {loginActions} from "../auth/login/singInSlice";
import {withRouter} from "react-router-dom";


const Menu = ({match}) => {
    const [pathPage, setPathPage] = useState(undefined)

    useEffect(() => {
        setPathPage(match.path)
    }, [match])

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
            <MenuContainerWrapper visible={menuToggle}>
                <MenuContainer>
                    <UserInfoWrapper>
                        <UserInfo/>
                    </UserInfoWrapper>
                    <MenuLinks text='Teams' link={"/teams"} pathPage={pathPage}><TeamsIcon/></MenuLinks>
                    <MenuLinks text='Players' link={"/players"} pathPage={pathPage}><PlayerIcon/></MenuLinks>
                    <LogoutWrapper onClick={logout}>
                        <MenuLinks text='Logout' link={"/"}><LogoutIcon/></MenuLinks>
                    </LogoutWrapper>
                </MenuContainer>
            </MenuContainerWrapper>
        </div>
    )
}
export default withRouter(Menu)

const MenuContainerWrapper = styled.div`
  min-width: 140px;
  min-height: 100%;
  @media screen and (max-width: 1110px) {
    background: rgba(65, 65, 65, 0.6);
    width: 100%;
    height: 100%;
    z-index: 1;
    position: absolute;
    display: ${props => props.visible ? 'flex' : 'none'}
  }
`
const MenuContainer = styled.div`
  z-index: 1;
  background-color: #ffffff;
  min-width: 140px;
  min-height: 100%;
  @media screen and (max-width: 1110px) {
    min-width: 0;
    width: 201px;
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
// const TeamsIconStyled = styled(TeamsIcon)`
//   path{
//     fill: ${(props) => props.activeicon==='/teams/' ? '#E4163A' : '#9C9C9C'}}
// `
// const PlayerIconStyled = styled(PlayerIcon)`
//   path{
//     fill: ${(props) => props.activeicon==='/players/' ? '#E4163A' : '#9C9C9C'}}
// `