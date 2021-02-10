import React from 'react';
import styled from 'styled-components'
import {AppLayout} from "./AppLayout";


export const ItemLayout = ({children} ) => {
    return(
        <AppLayout>
            <ListItem>
                {children}
            </ListItem>
        </AppLayout>
    )
}


const ListItem = styled.div`
  margin: 32px 80px;
  display: block;
  flex-wrap: wrap;
  @media screen and (max-width: 1110px){
    margin: 0;
  }
`