import React from 'react'
import {AuthLayout} from "../../layout/AuthLayout";
import {ReactComponent as SignUpImage} from "../../assets/img/signUp.svg";
import {SingUp} from "../singUp/SingUp";

export const Register = () =>{
    return (
        <AuthLayout image={<SignUpImage/>} title="SingUp">
            <SingUp/>
        </AuthLayout>
    )
}