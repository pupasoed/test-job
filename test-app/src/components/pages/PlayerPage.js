import React from 'react'
import {  fetchPlayers } from '../../actions/players/playersActions'
import {useDispatch, useSelector} from 'react-redux'
import { getPlayers } from '../../services/player-service'
import {bindActionCreators} from "redux";
import {store} from "../../store";
import {getPlayersAction} from "../../reducers/players";

const getData = (getPlayers, dispatch) => {
    dispatch(fetchPlayers(getPlayers, dispatch));
}
export const PlayersPage = () => {
    store.subscribe(()=>console.log(store.getState()))

    const dispatch = useDispatch()
    return <div>
        <button onClick = {() => {
            dispatch(getPlayersAction());
        }}>
            Test</button>
        {/*<button onClick = {() => dispatch(getPlayersActon(getPlayers()))} >Test</button>*/}
    </div>
}




// const mapDispatchToProps = (dispatch, { getPlayers }) => {
//
//     return bindActionCreators({
//         fetchPlayers: fetchPlayers(getPlayers)
//     }, dispatch);
// };