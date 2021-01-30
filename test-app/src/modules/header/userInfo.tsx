import React from "react";
import {ReactComponent as DefaultProfilePhoto} from "../../assets/img/defaultprofile.svg";
import styled from 'styled-components'
import {RootState} from "../../reducers";
import { useSelector } from 'react-redux';



export const UserInfo = () => {
    const userName = useSelector((state: RootState) => state.loginReducer.user?.name)
    return(
        <UserInfoContainer>
            <LeftUserNameWrapper>
                {userName}
            </LeftUserNameWrapper>
            <DefaultProfilePhoto/>
            <RightUserNameWrapper>
                {userName}
            </RightUserNameWrapper>
        </UserInfoContainer>
    )
}

const LeftUserNameWrapper = styled.div`
  margin-right: 19px;
  @media screen and (max-width: 1110px) {
    display: none;
  }
`

const UserInfoContainer = styled.div`
  margin-left: auto;
  align-items: center;
  display: flex;
  padding-right: 51px;
  @media screen and (max-width: 1110px) {
    padding-right: 0;
  }
`

const RightUserNameWrapper = styled.div`
        padding-left: 12px;
  @media screen and (min-width: 1110px) {
    display: none;
  }
`
