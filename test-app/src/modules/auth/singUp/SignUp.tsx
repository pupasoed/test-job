import React from 'react'
import { Input } from "../../../components/ui/Input"
import { Button } from "../../../components/ui/Button"
import { Links } from "../../../components/ui/Links";
import { Checkbox } from "../../../components/ui/Checkbox";
import { useForm } from "react-hook-form";
import styled from 'styled-components'
import {singUpRequested} from "./singUpAction";
import { useDispatch } from 'react-redux'



export function SignUp() {

    const { register, handleSubmit, errors } = useForm({})

    const dispatch = useDispatch()
    const onSubmit = (data) => {
        console.log(data);
        dispatch(singUpRequested(data))
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
                   name={"userName"}
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
            {/*<Input*/}
            {/*    register={register({*/}
            {/*        required: {*/}
            {/*            value: true,*/}
            {/*            message: 'This field is required',*/}
            {/*        },*/}
            {/*        maxLength: {*/}
            {/*            value: 15,*/}
            {/*            message: 'This input exceed maxLength.',*/}
            {/*        },*/}
            {/*        minLength: {*/}
            {/*            value: 2,*/}
            {/*            message: 'This input exceed minLength.',*/}
            {/*        }*/}
            {/*    })}*/}
            {/*    placeholder="Confirm password"*/}
            {/*    label="Enter your password again"*/}
            {/*    inputType={"password"}*/}
            {/*    name={"confirmPassword"}*/}
            {/*/>*/}
            <Checkbox label="I accept the agreement" />
            <ButtonWrapper>
                <Button buttonName="Sign Up"/>
            </ButtonWrapper>
            <Links labelName={"Already a member? "} linkText={"Sign in"} link={"/login"}/>
        </form>
    );
}

const ButtonWrapper = styled.div`
  margin: 24px 0;
`