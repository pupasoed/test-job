import React from 'react'
import styled from 'styled-components'

export const AppItem = ({items, itemClickHandler}) => {
    const {id, name, age} = items
    return(
        <Item onClick={()=>itemClickHandler(id)}>
            <ItemFooter>
                <ItemName>{name}</ItemName>
                <ItemAge>Year of foundation: {age}</ItemAge>
            </ItemFooter>
        </Item>
    )
}

const Item = styled.div`
  background: linear-gradient(121.57deg, #707070 1.62%, #393939 81.02%);
  border-radius: 4px;
  height: 380px;
  position: relative;
  @media screen and (max-width: 1110px) {
    height: 180px;
  }
`

const ItemFooter = styled.div`
  height: 100px;
  background: #303030;
  border-radius: 0 0 4px 4px;
  position: absolute;
  bottom: 0;
  width: 100%;
  display: grid;
  @media screen and (max-width: 1110px){
    height: 76px;
  } 
`

const ItemName = styled.span`
  justify-self: center;
  margin-top: 24px;
  color: #ffffff;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  @media screen and (max-width: 1110px){
    font-size: 12px;
    line-height: 150%;
    margin-top: 19px;
  }
`

const ItemAge = styled.span`
  justify-self: center;
  color: #ffffff;
  font-size: 14px;
  @media screen and (max-width: 1110px){
    font-size: 10px;
    line-height: 14px;
  }
`