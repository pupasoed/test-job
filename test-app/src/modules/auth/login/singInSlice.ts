import {createSlice} from "@reduxjs/toolkit";
import {loginRequested} from "./singInActions";
import {singUpRequested} from "../singUp/singUpAction";
// import {GetToken} from '../../../components/service-context/getTokenInLokalstorage'

interface User {
    token: string,
    name: string,
    avatarUrl: string | null
}
interface AuthState {
    user: User | null;
    loading: boolean;
}

const initialState: AuthState = {
    user: localStorage.user || null,
    loading: false
}

export const loginSlice = createSlice({
    name: "logInSlice",
    initialState: initialState,
    reducers: {
        returnUser(state) {
            const localStorageUser = localStorage.getItem('user')
            console.log(localStorageUser)
            if (localStorageUser) {
                state.user = JSON.parse(localStorageUser)
            }
        },

        logout(state) {
            state.user = null
            localStorage.clear()
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginRequested.pending, (state) => {
            state.user = null
        })
        builder.addCase(loginRequested.fulfilled, (state, action) => {
            state.user = action.payload
            localStorage.setItem('user', JSON.stringify(state.user));
        })
        builder.addCase(loginRequested.rejected, (state, action) => {
            state.user = null
            console.log(action.payload)
        })

        builder.addCase(singUpRequested.pending, (state) => {


            state.user = null
        })
        builder.addCase(singUpRequested.fulfilled, (state, action) => {
            state.user = action.payload
            localStorage.setItem('user', JSON.stringify(state.user));
        })
        builder.addCase(singUpRequested.rejected, (state, action) => {
            state.user = null
            console.log(action.payload)
        })
    }
})

export const loginReducer = loginSlice.reducer;
export const loginActions = loginSlice.actions;
