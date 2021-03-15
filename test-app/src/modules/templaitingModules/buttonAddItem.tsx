import React from 'react'
import {withRouter} from "react-router-dom";
import {Button} from "../../components/ui/Button";


const ButtonAddItem= ({history, match}) => {
    const onClickHandler = () => {
        history.push(`${match.path}new`)
    }
    return(
        <div onClick={onClickHandler}>
            <Button buttonName={ 'Add +' } />
        </div>
    )
}

export default withRouter(ButtonAddItem)