import React from 'react'
import Input from "../../components/Input"
import {Button} from "../../components/Button"
import {Links} from "../../components/Links";

export function SignUp() {
    return(
        <div>
            <Input placeholder="Name" label="Name" inputType={"email"}/>
            <Input placeholder="Login" label="Login" inputType={"email"}/>
            <Input placeholder="Password" label="Password" inputType={"password"}/>
            <Input placeholder="Repeat password" label="Enter your password again" inputType={"password"}/>
            <Button buttonName="Sign Up"/>
            <Links labelName={"Already a member? "} linkText={"Sign in"} link={"/login"}/>
        </div>
    );
}