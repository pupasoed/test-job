import React from 'react';
import styled from 'styled-components'
import { AppLayout } from "./AppLayout";


export const ListItemsFormLayout = ({ children }) => {
    return (
        <AppLayout>
            <ListItem>
                { children }
            </ListItem>
        </AppLayout>
    )
}

const ListItem = styled.div`
  margin: 32px 56px 32px 80px;
  @media screen and (max-width: 1110px) {
    margin: 16px 12px;
  }
`