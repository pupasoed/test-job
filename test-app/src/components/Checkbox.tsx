import React, {FC} from 'react';
import styled from "styled-components";


interface CheckboxProps {
    label: string
}

export const Checkbox:FC<CheckboxProps> = ({label}) => {
    return(
        <CheckboxWrapper>
            <input type="checkbox" name="scales"/>
                <LabelStyled htmlFor="scales">{label}</LabelStyled>
        </CheckboxWrapper>
    )
}

const CheckboxWrapper = styled.div`
  margin: 8px 0 12px 0;
  display: flex;
`
const LabelStyled = styled.div`
  color: #707070;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  margin-left: 7px;
`
