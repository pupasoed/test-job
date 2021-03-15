import React from 'react';
import styled from "styled-components";
import ButtonAddItem from "../../modules/templaitingModules/buttonAddItem";

export const SearchPanel = () => {

    return(
        <SearchPanelWrapper>
            <ButtonWrapper>
                <ButtonAddItem/>
            </ButtonWrapper>
        </SearchPanelWrapper>
    )
}
// export default withRouter(SearchPanel)

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