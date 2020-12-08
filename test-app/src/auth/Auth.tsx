import React from 'react'
import {SignIn} from "./singIn/SignIn";
import {SignUp} from "./singUp/SignUp";
// import { useForm } from "react-hook-form";



export const Auth = () =>{
    return(
        <form>
            <SignIn/>
            <SignUp/>
        </form>
    )
}