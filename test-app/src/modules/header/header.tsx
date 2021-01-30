import React from "react";
import styled from "styled-components";
import {ReactComponent as LogoHeader} from "../../assets/img/logo.svg";
import {MenuButton} from "../menu/menuButton";
import {UserInfo} from "./userInfo";
import {MenuItem} from "../../components/ui/menuItem";

export const Header = () => {
    return(
        <HeaderContainer>
            <Wrapper>
                <MenuButton/>
                <LogoHeaderWrapper>
                    <MenuItem link={"/teams"} type={"header"}>
                        <LogoHeader/>
                    </MenuItem>
                </LogoHeaderWrapper>
                <UserInfoWrapper>
                    <UserInfo/>
                </UserInfoWrapper>
                <MenuContainer/>
            </Wrapper>
        </HeaderContainer>
    )
};

const HeaderContainer = styled.div`
  background-color: #FFFFFF;
  height: 80px;
  width: 100%;
`

const Wrapper = styled.div`
  padding: 16px 0 16px 0;
  display: flex;
  position: absolute;
  width: 100%;
  box-shadow: 0 1px 10px rgba(209, 209, 209, 0.5);
`

const LogoHeaderWrapper = styled.div`
  padding-left: 51px;
  display: flex;
  @media screen and (max-width: 1110px) {
    margin-left: auto;
    margin-right: auto;  
    padding-left: 0;
    padding-right: 36px;
  }
`

const MenuContainer = styled.div`
  background-color: antiquewhite;
`

const UserInfoWrapper = styled.div`
  margin-left: auto;
  place-self: center;
  @media screen and (max-width: 1110px) {
    display: none;
  }
`