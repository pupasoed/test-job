import React from 'react'
import Input from "../../components/Input"
import { Button } from "../../components/Button"
import { Links } from "../../components/Links";

export function SignIn() {
    const onSubmit = () => {}

    return(
            <form>
                <Input placeholder="Login" label="Login" inputType={"email"}/>
                <Input placeholder="Password" label="Password" inputType={"password"}/>
                <Button buttonName="Sign In"/>
                <Links labelName={"Not a member yet? "} linkText={"Sign up"} link={"/register"}/>
            </form>
    );
}
