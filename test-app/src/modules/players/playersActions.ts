import { createAsyncThunk } from "@reduxjs/toolkit";
import {getPlayers} from "../../services/players-service";



export const FETCH_PLAYERS_REQUESTED = 'players/FETCH_PLAYERS_REQUESTED'

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



