import React from 'react'
import {AppLayout} from "../../components/layout/AppLayout";
import styled from 'styled-components'
import {PlayersTable} from "./playersTable";

export const TeamPage = () => {
    return(
        <AppLayout>
            <Header/>
            <TeamCart>

            </TeamCart>
            <PlayersTable/>
        </AppLayout>
    )
}

const Header = styled.div`
  height: 70px;
  width: 100%;
  background: #FFFFFF;
  border: 0.5px solid #9C9C9C;
  box-sizing: border-box;
  border-radius: 10px 10px 0 0;
`

const TeamCart = styled.div`
        height: 400px;
  width: 100%;
  background: linear-gradient(96deg, #707070 0%, #393939 100.28%);
  border-radius: 0 0 10px 10px;
`

const PhotoContainer = styled.div`
  width: 502px;
  
`