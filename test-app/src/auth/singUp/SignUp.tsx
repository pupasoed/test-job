import React from 'react'
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Links } from "../../components/Links";
import { Checkbox } from "../../components/Checkbox";
import { useForm } from "react-hook-form";


export function SignUp() {

    const { register, handleSubmit, errors } = useForm({})

    const onSubmit = (name) => {
        console.log(name);
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
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
                   placeholder="Name"
                   label="Name"
                   inputType={"login"}
                   name={"name"}
            />
            <Input
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
                placeholder="Login"
                label="Login"
                inputType={"login"}
                name={"login"}
            />
            <Input
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
                name={"password"}
            />
            <Input
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
                placeholder="Confirm password"
                label="Enter your password again"
                inputType={"password"}
                name={"confirmPassword"}
            />
            <Checkbox label="I accept the agreement" />
            <Button buttonName="Sign Up"/>
            <Links labelName={"Already a member? "} linkText={"Sign in"} link={"/login"}/>
        </form>
    );
}