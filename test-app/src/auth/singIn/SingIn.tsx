import React from 'react'
import Input from "../../components/Input"
import {Button} from "../../components/Button"

export function SingIn() {
    const onSubmit = () => {}

    return(
            <form>
                {/*<h1>{title="SingIn"}</h1>*/}
                <Input placeholder="Login" label="Login" inputType={"email"}/>
                <Input placeholder="Password" label="Password" inputType={"password"}/>
                <Button buttonName="Sign In"/>
                <div>234234</div>
            </form>
    );
}