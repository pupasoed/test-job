import React from 'react'
import {ItemLayout} from "../../components/layout/ItemLayout";
import {PlayersTable} from "./playersTable";
import {CartItem} from "../../components/templating/cartItem";

export const TeamPage = () => {
    return(
        <ItemLayout>
            <CartItem/>
            <PlayersTable/>
        </ItemLayout>
    )
}
