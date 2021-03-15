import React from 'react'
import styled from 'styled-components'
import {ReactComponent as AddPhotoImage} from "../../assets/img/addPhoto.svg";

export const ButtonAddPhoto = () => {

    return(
        <ButtonAddPhotoWrapper>
            <AddPhotoImageStyled/>
        </ButtonAddPhotoWrapper>
    )
}


const ButtonAddPhotoWrapper = styled.div`
  background: #9C9C9C;
  opacity: 0.5;
  border-radius: 10px;
  width: 336px;
  height: 261px;
  text-align: center;
`

const AddPhotoImageStyled = styled(AddPhotoImage)`
  //margin: auto;
`
