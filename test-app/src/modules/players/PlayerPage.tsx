import React, {useEffect} from 'react'
import {getPlayersAction} from './playersActions'
import {getTeamsAction} from "../teams/teamsAction";

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from "../../reducers";
import {store} from "../../store";
import {AppLayout} from "../../components/layout/AppLayout";
import {AppListItem} from "../../components/ui/appListItem";

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
//     return (
//         <AppLayout>
//             {
//                 items.map((items) => {
//                     return <AppItem items={items}/>
//                 })
//             }
//
//             {/*<div>*/}
//             {/*    <button onClick={() => {*/}
//             {/*        getData(dispatch);*/}
//             {/*    }}>*/}
//             {/*        Test*/}
//             {/*    </button>*/}
//             {/*</div>*/}
//         </AppLayout>
//     )
// }




export const PlayersPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPlayersAction())
    }, [dispatch])
    const {players} = useSelector((state: RootState) => state.players)
    // console.log(players)
    return (
        <AppLayout>
            {
                players.map((players) => {
                    return <AppListItem items={players}/>
                })
            }
        </AppLayout>
    )
}
