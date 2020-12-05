import React from 'react'
import SingIn from "./singIn/SingIn";
import {SingUp} from "./singUp/SingUp";
import { useForm } from "react-hook-form";

'react-hook-form';


export const Auth = () =>{

    const { register, handleSubmit} = useForm()
    return(
        <form>
            <SingIn/>
            <SingUp/>
        </form>
    )
}