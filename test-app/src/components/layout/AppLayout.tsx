import React, {FC} from "react";
import {Header} from "../../modules/header/header";
import Menu from "../../modules/menu/menu";
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
                <ListItemContainer>
                    {/*<ListItem>*/}
                        {children}
                    {/*</ListItem>*/}
                </ListItemContainer>
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
const ListItemContainer = styled.div`
  background-color: #F6F6F6;
  width: 100%;
  display: block;
  overflow: scroll;
`