import React, {useEffect} from 'react'
import {getPlayersAction} from './playersActions'
import { withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../reducers';
import {AppLayout} from '../../components/layout/AppLayout';
import {AppListItem} from '../../components/ui/appListItem';


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

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPlayersAction())
    }, [dispatch])
    const {players} = useSelector((state: RootState) => state.players)

    return (
        <AppLayout>
            {
                players.map((players) => {
                    return <AppListItem items={players}
                    // Oncklic={PlayerDetails}/>
                    Oncklic={() => {history.push(`players/${players.id}`)}}
                    />
                })
            }
        </AppLayout>
    )
}

export default withRouter(PlayersPage)