import React from 'react'
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Links } from "../../components/Links";
import { Checkbox } from "../../components/Checkbox";
import { useForm } from "react-hook-form";


export function SignUp() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (name) => {
        console.log(name);}
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input register={register} placeholder="Name" label="Name" inputType={"login"} name={"name"}/>
            <Input register={register} placeholder="Login" label="Login" inputType={"login"} name={"login"}/>
            <Input register={register} placeholder="Password" label="Password" inputType={"password"} name={"password"}/>
            <Input register={register} placeholder="Confirm password" label="Enter your password again" inputType={"password"} name={"confirmPassword"}/>
            <Checkbox label="I accept the agreement" />
            <Button buttonName="Sign Up"/>
            <Links labelName={"Already a member? "} linkText={"Sign in"} link={"/login"}/>
        </form>
    );
}