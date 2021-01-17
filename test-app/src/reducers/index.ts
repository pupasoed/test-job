import { combineReducers } from 'redux'
import { playersReducer } from './players'

export const rootReducer = combineReducers({
    players: playersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
