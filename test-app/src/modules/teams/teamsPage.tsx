import React, {useEffect} from 'react'
import {AppLayout} from "../../components/layout/AppLayout";
// import styled from 'styled-components'
import {AppListItem} from "../../components/ui/appListItem";
import {useDispatch} from 'react-redux'
import {getTeamsAction} from "./teamsAction";
import {RootState} from "../../reducers";
import {useSelector} from 'react-redux';


export const TeamsPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTeamsAction())
    }, [dispatch])
    const {teams, error, loading} = useSelector((state: RootState) => state.teams)
    // console.log(error, loading)
    return (
        <AppLayout>
            {
                teams.map((teams) => {
                    return <AppListItem items={teams}/>
                })
            }
        </AppLayout>
    )
}
