import {createAsyncThunk} from "@reduxjs/toolkit";
import {loginService} from "../../../api/loginService";
import {setToken} from "../../../api/baseFetch";


export const LOGIN_REQUESTED = 'loginRequested'

export const loginRequested = createAsyncThunk(
    LOGIN_REQUESTED,
    async (data:any, {rejectWithValue}) => {
        try {
            const response = await loginService(data)
            setToken(response.token);
            return response;
        } catch (err){
            if (err.message) {
                return rejectWithValue(err.message);
            } else {
                return rejectWithValue("Invalid login or password");
            }
        }
    }
)