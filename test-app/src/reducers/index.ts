import { combineReducers } from 'redux'
import { playersReducer } from '../modules/players/playersReducers'
import { loginReducer } from "../modules/auth/login/singInSlice";
import { teamsReducer } from "../modules/teams/teamsReducer";
// import {singUpReducer} from "../modules/auth/login/singInSlice";

export const rootReducer = combineReducers({
    players: playersReducer,
    loginReducer,
    teams: teamsReducer,
    // singUpReducer
});

export type RootState = ReturnType<typeof rootReducer>;
