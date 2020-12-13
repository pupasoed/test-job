import React from 'react'
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Links } from "../../components/Links";
import { Checkbox } from "../../components/Checkbox";
import { useForm } from "react-hook-form";


export function SignUp() {
    const { register, handleSubmit } = useForm();
    const onSubmit = () => {}
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input register={register} placeholder="Name" label="Name" inputType={"login"}/>
            <Input register={register} placeholder="Login" label="Login" inputType={"login"}/>
            <Input register={register} placeholder="Password" label="Password" inputType={"password"}/>
            <Input register={register} placeholder="Repeat password" label="Enter your password again" inputType={"password"}/>
            <Checkbox label="I accept the agreement" />
            <Button buttonName="Sign Up"/>
            <Links labelName={"Already a member? "} linkText={"Sign in"} link={"/login"}/>
        </form>
    );
}