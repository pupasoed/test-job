import React from 'react'
import {AuthLayout} from "../../layout/AuthLayout";
import {ReactComponent as SignUpImage} from "../../assets/img/signUp.svg";
import {SignUp} from "./SignUp";

export const Register = () =>{
    return (
        <AuthLayout image={<SignUpImage/>} title="Sign Up">
            <SignUp/>
        </AuthLayout>
    )
}