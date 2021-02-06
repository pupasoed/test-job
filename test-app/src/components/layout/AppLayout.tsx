import React, {FC} from "react";
import {Header} from "../../modules/header/header";
import {Menu} from "../../modules/menu/menu";
import styled from 'styled-components'


interface IProps {
    title?: string
}

export const AppLayout:FC<IProps> = ({ children}) => {

    return (
        <AppLayoutWrapper>
            <Header/>
            <BodyContainer>
                <Menu/>
                <ListItemConteiner>
                    <ListItem>
                        {children}
                    </ListItem>
                </ListItemConteiner>
            </BodyContainer>
        </AppLayoutWrapper>
    )
}

const AppLayoutWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
const BodyContainer = styled.div`
  display: flex;
  height: 100%;
`
const ListItemConteiner = styled.div`
  background-color: #F6F6F6;
  width: 100%;
`
const ListItem = styled.div`
  margin: 32px 80px;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 1110px){
    margin: 16px 12px;
    //justify-content: center;
  }
`