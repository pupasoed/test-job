import {
    ERROR_PLAYERS_LOADED,
    FETCH_PLAYERS_LOADED,
    FETCH_PLAYERS_REQUESTED, fetchPlayers,
    GET_PLAYERS
} from "../actions/players/playersActions";
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {getPlayers} from "../services/player-service";

interface Player{
    name: string
}

interface PlayersState {
    players: Player[]
}


const initialState = {
    players: []
};

// export const playersReducer = (state = initialState, action) => {
//     switch (action.type){
//
//         case GET_PLAYERS:
//             return {
//                 players: action.state,
//             };
//         case FETCH_PLAYERS_REQUESTED:
//             return {
//                 players: []
//             };
//         case FETCH_PLAYERS_LOADED:
//             return {
//                 players: action.payload
//             };
//         case ERROR_PLAYERS_LOADED:
//             return {
//                 players: action.payload
//             };
//         default:
//             return state.players;
//     }
// }


export const getPlayersAction = createAsyncThunk(
    FETCH_PLAYERS_REQUESTED,
    async () => {
        try{
            return await getPlayers()
        } catch (err){
            return err
        }
    }
)

const playersSlice = createSlice({
    name: "players",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPlayersAction.pending, (state) => {
            state.players = [];
        });
        builder.addCase(getPlayersAction.fulfilled, (state, action) => {
            state.players = action.payload
        })
        builder.addCase(getPlayersAction.rejected, (state, action)=>{
            state.players = [];
        })
    }
})

export const playersReducer = playersSlice.reducer