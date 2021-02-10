import React from 'react'
import { Input } from "../../../components/ui/Input"
import { Button } from "../../../components/ui/Button"
import { Links } from "../../../components/ui/Links";
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux'
import { loginRequested } from "./singInActions";
import styled from 'styled-components'


export function SignIn() {

    type Inputs = {
        login: string,
        password: string,
    };

    const dispatch = useDispatch()
    const {register, handleSubmit, errors,setValue} = useForm<Inputs>({})
    const onSubmit = async (data) => {
        dispatch(loginRequested(data))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                name="login"
                register={register({
                    required: {
                        value: true,
                        message: 'This field is required',
                    },
                    maxLength: {
                        value: 25,
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
                        value: 25,
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
            <ButtonWrapper>
                <Button buttonName="Sign In"/>
            </ButtonWrapper>
            <Links labelName={"Not a member yet? "} linkText={"Sign up"} link={"/register"}/>
        </form>
    );
}

const ButtonWrapper = styled.div`
  margin: 24px 0;
`