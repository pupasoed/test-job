import React from 'react'
import {ReactComponent as SignInImage} from "../../assets/img/signIn.svg";
import {AuthLayout} from "../../layout/AuthLayout";
import SingIn from "./SingIn";


export const Login = () =>{
    return (
        <AuthLayout image={<SignInImage/>}>
            <SingIn/>
        </AuthLayout>
    )
}