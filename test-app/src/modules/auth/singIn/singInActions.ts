import {createAsyncThunk} from "@reduxjs/toolkit";
import {loginService} from "../../../api/loginService";
import {setToken} from "../../../api/baseFetch";

export const LOGIN_REQUESTED = 'loginRequested'

export const loginRequested = createAsyncThunk(
    LOGIN_REQUESTED,
    // 'logInSlice/loginRequested',
    async (data:any, {rejectWithValue}) => {
        try {
            const reponse = await loginService(data)
            setToken(reponse.token);
            return reponse;
        } catch (err){
            if (err.message) {
                return rejectWithValue(err.message);
            } else {
                return rejectWithValue("Invalid login or password");
            }
        }
    }
)