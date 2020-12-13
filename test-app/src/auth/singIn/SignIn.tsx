import React from 'react'
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Links } from "../../components/Links";
import { useForm } from "react-hook-form";
import {Simulate} from "react-dom/test-utils";
// import * as Yup from 'yup'
// import error = Simulate.error;


export function SignIn() {

    const onSubmit = (data) => {
        alert(data)
    }

    // const { register, handleSubmit, errors } = useForm({
    //      validationSchema: Yup.object({
    //         login: Yup.string().max(14, 'Login has max 14 simbol').required('Required'),
    //         password: Yup.string().min(6, 'Password has max 14 simbol').required('Required')
    //     })
    // });

    return(
            <div
                // onSubmit={handleSubmit(onSubmit)}
            >
                <Input name="Login"
                       // register={register({required: true, minLength: 6, maxLength: 10})}
                       placeholder="Login"
                       label="Login"
                       inputType={"login"}
                       // error={errors.Login}
                />
                <Input name="password"
                       // register={register({required: true, minLength: 6, maxLength: 10})}
                       placeholder="Password"
                       label="Password"
                       inputType={"password"}/>
                <Button buttonName="Sign In"/>
                <Links labelName={"Not a member yet? "} linkText={"Sign up"} link={"/register"}/>
            </div>
    );
}
