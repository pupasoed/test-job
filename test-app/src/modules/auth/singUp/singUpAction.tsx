import {createAsyncThunk} from "@reduxjs/toolkit";
import {signUpService} from "../../../api/loginService";
import {setToken} from "../../../api/baseFetch";


export const SING_UP_REQUESTED = 'singUpRequested'

export const singUpRequested = createAsyncThunk(
    SING_UP_REQUESTED,
    async (data: any, {rejectWithValue}) => {
        try {
            const response = await signUpService(data)
            setToken(response.token);
            return response
        }catch(err){
            if (err.message) {
                return rejectWithValue(err.message);
            } else {
                return rejectWithValue("Invalid login or password");
            }}
    })

