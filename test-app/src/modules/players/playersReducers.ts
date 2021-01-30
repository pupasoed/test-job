import {
    getPlayersAction
} from "./playersActions";
import { createSlice} from '@reduxjs/toolkit'


// interface Player{
//     name: string
// }
//
// interface PlayersState {
//     players: Player[]
// }


const initialState = {
    players: []
};

export const playersSlice = createSlice({
    name: "players",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPlayersAction.pending, (state) => {
            state.players = [];
        });
        builder.addCase(getPlayersAction.fulfilled, (state, action) => {
            state.players = action.payload
            // console.log(state.players)
        })
        builder.addCase(getPlayersAction.rejected, (state, action)=>{
            state.players = [];
        })
    }
})

export const playersReducer = playersSlice.reducer