import React from 'react'
import styled from "styled-components";
import {AppItem} from "./appItem";


export const ListItem = ({items, itemClickHandler}) => {
    return(
        <ListItemsWrapper>
            {
                items.map((items) => {
                    return <AppItem
                        items={items}
                        itemClickHandler={itemClickHandler}
                    />
                })
            }
        </ListItemsWrapper>
    )
};

const ListItemsWrapper = styled.div`
  flex-wrap: wrap;
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 1751px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 1380px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 1110px) {
    grid-template-columns: repeat(5, 1fr);
    gap: 12px;
  }
  @media screen and (max-width: 920px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
