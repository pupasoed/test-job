import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {accessSync} from "fs";


export const GET_PLAYERS = 'players/GET_PLAYERS'
export const FETCH_PLAYERS_REQUESTED = 'players/FETCH_PLAYERS_REQUESTED'
export const FETCH_PLAYERS_LOADED = 'players/FETCH_PLAYERS_LOADED'
export const ERROR_PLAYERS_LOADED = 'players/ERROR_PLAYERS_LOADED'


export const getPlayersActon = (getPlayers) => {
    console.log(getPlayers)
    return {
        type: GET_PLAYERS,
        payload: getPlayers
    }
}

const playersRequested = () => {
    console.log("Action playersRequested")
    return{
        type: FETCH_PLAYERS_REQUESTED,
    }
}

interface Player {
    name: string;
}
const playersLoaded = (players) => {
    console.log("Action playersLoaded")
    return{
        type: FETCH_PLAYERS_LOADED,
        payload: players
    }
}

const playersError = (error: Error) => {
    return {
        type: ERROR_PLAYERS_LOADED,
        payload: error
    }
}

export const fetchPlayers = (getPlayers, dispatch) => () => {
    dispatch(playersRequested());
    getPlayers()
        .then((data) => dispatch(playersLoaded(data)))
        .catch((err) => dispatch(playersError(err)))
}



