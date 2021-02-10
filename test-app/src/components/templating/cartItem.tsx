import React from 'react'
import styled from 'styled-components'


export const CartItem = () => {
    return(
        <CartContainer>
            <Header/>
            <TeamCart>

            </TeamCart>
        </CartContainer>
        )
}

const Header = styled.div`
  height: 70px;
  width: 100%;
  background: #FFFFFF;
  border: 0.5px solid #9C9C9C;
  box-sizing: border-box;
  border-radius: 10px 10px 0 0;
  @media screen and (max-width: 1110px) {
    border: none;
  }
`
const CartContainer = styled.div`
  
`

const TeamCart = styled.div`
        height: 400px;
  width: 100%;
  background: linear-gradient(96deg, #707070 0%, #393939 100.28%);
  border-radius: 0 0 10px 10px;
  @media screen and (max-width: 1110px) {
    border-radius: 0;
  }
`