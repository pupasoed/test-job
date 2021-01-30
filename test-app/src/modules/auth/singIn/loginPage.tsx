import React from 'react'
import {ReactComponent as SignInImage} from "../../../assets/img/signIn.svg";
import {AuthLayout} from "../../../components/layout/AuthLayout";
import {SignIn} from "./SignIn";


export const Login = () =>{
    return (
        <AuthLayout image={<SignInImage/>} title="Sign In">
            <SignIn/>
        </AuthLayout>
    )
}