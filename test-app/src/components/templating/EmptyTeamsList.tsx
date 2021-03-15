import React, {FC} from 'react'
import styled from "styled-components";
import {Button} from "../ui/Button";
import ButtonAddItem from "../../modules/templaitingModules/buttonAddItem";

interface iProps {
    title: string;
    textForm: string;
    image: any;
}

export const EmptyTeamsList:FC<iProps> = ({title, textForm, image}) => {
    return (
        <EmptyTeamsListContainer>
            <ItemWrapper>
                {image}
            </ItemWrapper>
            <ItemWrapper>
                <TitleSpan>{title}</TitleSpan>
            </ItemWrapper>
            <TextWrapper>
                <Text>{textForm}</Text>
            </TextWrapper>
            <ButtonWrapper>
                <ButtonAddItem/>
                {/*<ButtonStyled buttonName={'Add +'}/>*/}
            </ButtonWrapper>
        </EmptyTeamsListContainer>
    )
};

const EmptyTeamsListContainer = styled.div`
  background-color: white;
  width: 556px;
  height: 658px;
  margin: auto;
  position: relative;
  top: 10%;
  border-radius: 15px;
  @media screen and (max-width: 1110px) {
    width: 375px;
    height: 538px;
    border-radius: unset;
  }
`
const TitleSpan = styled.span`
  font-weight: 800;
  font-size: 36px;
  line-height: 49px;
  color: #FF768E;
  @media screen and (max-width: 1110px) {
    font-size: 17px;
    line-height: 25px;
  }
`
const Text = styled.span`
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  color: #707070;

  @media screen and (max-width: 1110px) {
    font-size: 15px;
    line-height: 24px;
  }
`
const ButtonStyled = styled(Button)`
  width: 100px;
  margin: 0;
  background: #FFffff;
`
const ItemWrapper = styled.div`
  text-align: center;
  padding-top: 48px;
  
`
const TextWrapper = styled(ItemWrapper)`
  padding-top: 24px;
  @media screen and (max-width: 1110px) {
    padding-top: 16px;
  }
`
const ButtonWrapper = styled(ItemWrapper)`
  padding-top: 34px;
  margin: auto;
  width: 360px;
  @media screen and (max-width: 1110px) {
    padding-top: 48px;
    width: 351px;
  }
`

