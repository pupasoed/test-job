import {createAsyncThunk} from "@reduxjs/toolkit";
import {getTeams} from '../../services/teams-service'
import {getTeamsService} from "../../api/teamsService";


export const FETCH_TEAMS_REQUEST = 'teams/FETCH_TEAMS_REQUEST'

export const getTeamsAction = createAsyncThunk(
    FETCH_TEAMS_REQUEST,
    async () => {
        try {
            return await getTeams()
        }catch (err){
            return err
        }
    }
)
