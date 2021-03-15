import React, {useCallback, useEffect} from 'react'
import {getPlayersAction} from './playersActions'
import {withRouter} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../reducers';
import {AppLayout} from '../../components/layout/AppLayout';
import {ListItemsFormLayout} from "../../components/layout/ListItemsFormLayout";
import {EmptyTeamsList} from "../../components/templating/EmptyTeamsList";
import styled from "styled-components";
import {ReactComponent as EptyPlayersList} from "../../assets/img/EptyPlayersList.svg"
import {ListItem} from "../../components/templating/ListItem";
import {SearchPanel} from "../../components/templating/SearchPannel";


// const getData = (dispatch) => {
//     dispatch(getPlayersAction());
// }

// export const PlayersPage = () => {
//     const dispatch = useDispatch()
//     useEffect(() => {dispatch(getTeamsAction())}, [dispatch])
//     const { items } = useSelector((state: RootState) => state.teams)
//     console.log(items)
//
//     // store.subscribe(() => console.log(store.getState()))

const PlayersPage = ({history}) => {

    const teamClickHandler = useCallback((id) => {
        history.push(`/players/${id}`)
    }, [history])

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPlayersAction())
    }, [dispatch])
    const {players} = useSelector((state: RootState) => state.players)

    if (players.length === 0) {
        return (
            <AppLayout>
                <EmptyTeamsList title={"Empty here"} textForm={"Add new players to continue"}
                                image={<EmptyPlayersListStyled/>}/>
            </AppLayout>
        )
    } else {
        return (
            <ListItemsFormLayout>
                <SearchPanel />
                <ListItem items={players} itemClickHandler={teamClickHandler} />
            </ListItemsFormLayout>
        )
    }
}

export default withRouter(PlayersPage)


const EmptyPlayersListStyled = styled(EptyPlayersList)`
  @media screen and (max-width: 1110px) {
    width: 339px;
    height: 225px;
  }
`