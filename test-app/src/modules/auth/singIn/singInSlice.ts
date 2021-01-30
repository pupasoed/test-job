import {createSlice} from "@reduxjs/toolkit";
import {loginRequested} from "./singInActions";
import {GetToken} from '../../../components/service-context/getTokenInLokalstorage'

interface User {
    token: string,
    name: string,
    avatarUrl: string | null
}
interface AuthState {
    user: User | null | undefined,
    loading: boolean
}

const initialState: AuthState = {
    user: undefined,
    loading: false
}

export const loginSlice = createSlice({
    name: "logInSlice",
    initialState: initialState,
    reducers: {
        returnToken(state) {
            // const localStorageUser = localStorage.getItem('user')
            // console.log(localStorageUser)
            // if (localStorageUser) {
            //     state.user = JSON.parse(localStorageUser)
            //     console.log(state.user)
            // }
            state.user = GetToken()
            console.log(state.user)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginRequested.pending, (state) => {
            state.user = null
        })
        builder.addCase(loginRequested.fulfilled, (state, action) => {
            state.user = action.payload
            localStorage.setItem('user', JSON.stringify(state.user))
            console.log(state.user)
        })
        builder.addCase(loginRequested.rejected, (state, action) => {
            state.user = null
        })
    }
})

export const loginReducer = loginSlice.reducer;
export const loginActions = loginSlice.actions;
