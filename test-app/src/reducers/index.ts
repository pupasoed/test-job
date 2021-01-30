import { combineReducers } from 'redux'
import { playersReducer } from '../modules/players/playersReducers'
import { loginReducer } from "../modules/auth/singIn/singInSlice";
import { teamsReducer } from "../modules/teams/teamsReducer";

export const rootReducer = combineReducers({
    players: playersReducer,
    loginReducer,
    teams: teamsReducer,

});

export type RootState = ReturnType<typeof rootReducer>;
