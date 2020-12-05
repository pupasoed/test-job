import React from 'react'
import {AuthLayout} from "../../layout/AuthLayout";
import {ReactComponent as SignUpImage} from "../../assets/img/signUp.svg";
import SingIn from "../singIn/SingIn";

export const Register = () =>{
    return (
        <AuthLayout image={<SignUpImage/>}>
            <SingIn/>
        </AuthLayout>
    )
}