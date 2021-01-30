import { getTeamsAction } from './teamsAction'
import { createSlice } from "@reduxjs/toolkit";
import {log} from "util";


const initialState = {
    teams: [],
    error: false,
    loading: false
}

export const teamsSlice = createSlice({
    name: "Teams",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTeamsAction.pending, (state) =>{
            state.teams = [];
            state.error = false;
            state.loading = true;
        });
        builder.addCase(getTeamsAction.fulfilled, (state, action) => {
            state.teams = action.payload;
            state.error = false;
            state.loading = false;
            // console.log(state.teams)
        })
        builder.addCase(getTeamsAction.rejected, (state, action) =>{
            state.teams = [];
            state.error = true;
            state.loading = false;
        })
    }
})

export const teamsReducer = teamsSlice.reducer