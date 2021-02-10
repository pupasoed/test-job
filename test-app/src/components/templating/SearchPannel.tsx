import React from 'react';
import {Button} from "../ui/Button";
import styled from "styled-components";


export const SearchPanel = ( {onClickHandler} ) => {

    return(
        <SearchPanelWrapper>
            <ButtonWrapper onClick={onClickHandler}>
                <Button buttonName={ 'Add' } />
            </ButtonWrapper>
        </SearchPanelWrapper>
    )
}

const SearchPanelWrapper = styled.div`
  margin: 32px 0;
  @media screen and (max-width: 1110px) {
  }
`
const ButtonWrapper = styled.div`
  width: 104px;
  margin-left: auto;
  margin-right: 0;
`