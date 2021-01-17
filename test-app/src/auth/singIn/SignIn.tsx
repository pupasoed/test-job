import React from 'react'
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Links } from "../../components/Links";
import { useForm } from "react-hook-form";
// import {SwapiService} from "../../api/api";
import {stringify} from "querystring";


export function SignIn() {

    const Service = async (url, name) => {
        // async function getResource(url: any, name) {
        const res = await fetch(`http://dev.trainee.dex-it.ru/api${url}`,
            {method: 'POST',headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(name),}
    )
        if (!res.ok) {
            throw new Error(`could not fetch ${res.status}`)
        }
        const body: any = await res.json();
        return body;
    }
    // }


        // authSingIn(requestOptions){
        //     const authData = {
        //         url: '/Auth/SignUp'
        //     }
        //     return this.getResource(`/Auth/SignUp`)
        // }


    const { register, handleSubmit, errors } = useForm({})

    const onSubmit = (name) => {
        const url: string =  '/Auth/SignUp'
        Service(url, name)
    }

    return(
            <form onSubmit={handleSubmit(onSubmit)} >
                <Input
                    name="login"
                    register={register({
                        required: {
                            value: true,
                            message: 'This field is required',
                        },
                        maxLength: {
                            value: 15,
                            message: 'This input exceed maxLength.',
                        },
                        minLength: {
                            value: 6,
                            message: 'This input exceed minLength.',
                        }
                        })}

                    placeholder="Login"
                    label="Login"
                    inputType={"login"}
                    error={errors.login}
                />
                <Input
                    name="password"
                    register={register({
                        required: {
                            value: true,
                            message: 'This field is required',
                        },
                        maxLength: {
                            value: 15,
                            message: 'This input exceed maxLength.',
                        },
                        minLength: {
                            value: 2,
                            message: 'This input exceed minLength.',
                        }
                    })}
                    placeholder="Password"
                    label="Password"
                    inputType={"password"}
                    error={errors.password}
                />
                <Button buttonName="Sign In"/>
                <Links labelName={"Not a member yet? "} linkText={"Sign up"} link={"/register"}/>
            </form>
    );
}
