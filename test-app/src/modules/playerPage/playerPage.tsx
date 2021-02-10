import React from 'react'
import { CartItem } from "../../components/templating/cartItem";
import { ItemLayout } from "../../components/layout/ItemLayout";
import styled from 'styled-components'

export const PlayerPage = () => {
    return (
        <ItemLayout>
            <CartItemWrapper>
                <CartItem/>
            </CartItemWrapper>
        </ItemLayout>
    )
}

const CartItemWrapper = styled.div`
    
    `