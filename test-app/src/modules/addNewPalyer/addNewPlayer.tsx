import React from 'react'
import {ItemLayout} from "../../components/layout/ItemLayout";
import {Input} from "../../components/ui/Input";
import {useForm} from "react-hook-form";
import styled from 'styled-components'
import {ButtonAddPhoto} from "../../components/ui/ButtonAddPhoto";


export const AddPlayer = () => {

    type Inputs = {
        Name: string,
        Position: string,
        Team: string,
        Height: string,
        Weight: string,
        Birthday: string,
        Number: string,
    };

    const {register, handleSubmit, errors, setValue} = useForm<Inputs>({})

    return (
        <ItemLayout>
            <FormWrapper>
                <ImageWrapper>
                    <ButtonAddPhoto/>
                </ImageWrapper>
                <InputWrapper>
                    <Input
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
                        name="Name"
                        placeholder="Name"
                        label="Name"
                        inputType={"login"}
                        error={errors.Name}
                    />

                    <Input
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
                        name="Position"
                        placeholder="Position"
                        label="Position"
                        inputType={"login"}
                        error={errors.Position}
                    />
                    <Input
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
                        name="Team"
                        placeholder="Team"
                        label="Team"
                        inputType={"login"}
                        error={errors.Team}
                    />
                    <Input
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
                        name="Height"
                        placeholder="Height"
                        label="Height"
                        inputType={"login"}
                        error={errors.Height}
                    />
                    <Input
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
                        name="Weight"
                        placeholder="Weight"
                        label="Weight"
                        inputType={"login"}
                        error={errors.Weight}
                    />
                    <Input
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
                        name="Birthday"
                        placeholder="Birthday"
                        label="Birthday"
                        inputType={"login"}
                        error={errors.Birthday}
                    />
                    <Input
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
                        name="Number"
                        placeholder="Number"
                        label="Number"
                        inputType={"login"}
                        error={errors.Number}
                    />
                </InputWrapper>

            </FormWrapper>
            {/*<CartItem/>*/}
            <form>

            </form>
        </ItemLayout>
    )
}


const FormWrapper = styled.div`
  display: flex;
  background: #fff;
`

const InputWrapper = styled.div`
  margin-top: 48px;
  margin-right: 229px;
  width: 100%;
`

const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
  margin: 73px 48px 136px ;
`