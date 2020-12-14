import React from 'react'
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Links } from "../../components/Links";
import { useForm } from "react-hook-form";


export function SignIn() {

    const { register, handleSubmit, errors } = useForm({})

    const onSubmit = (name) => {
        console.log({name})
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
                            value: 6,
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
