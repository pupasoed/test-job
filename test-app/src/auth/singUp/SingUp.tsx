import React from 'react'
import Input from "../../components/Input"
import {Button} from "../../components/Button"

export function SingUp() {
    return(
        <div>
            {/*<h1>{title="SingIn"}</h1>*/}
            <Input placeholder="Name" label="Name" inputType={"email"}/>
            <Input placeholder="Login" label="Login" inputType={"email"}/>
            <Input placeholder="Password" label="Password" inputType={"password"}/>
            <Input placeholder="Enter your password again" label="Again password" inputType={"password"}/>
            <Button buttonName="Sign Up"/>
            <div>234234</div>
        </div>
    );
}