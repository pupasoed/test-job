import React, {useCallback, useEffect} from 'react'
import {AppLayout} from "../../components/layout/AppLayout";
import {ListItemsFormLayout} from "../../components/layout/ListItemsFormLayout";
import {useDispatch} from 'react-redux'
import {getTeamsAction} from "./teamsAction";
import {RootState} from "../../reducers";
import {useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';
import styled from "styled-components";
import {EmptyTeamsList} from "../../components/templating/EmptyTeamsList";
import {ReactComponent as EmptyTeamsListImg} from "../../assets/img/EmptyTeamsList.svg"
import {SearchPanel} from "../../components/templating/SearchPannel";
import {ListItem} from "../../components/templating/ListItem";


const TeamsPage = ({history}) => {

    const buttonHandler = () => {
        // history.push(`/teams/new/`)
    }

    const teamClickHandler = useCallback((id) => {
        history.push(`/teams/${id}`)
    }, [history])

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTeamsAction())
    }, [dispatch])
    const {teams, error, loading} = useSelector((state: RootState) => state.teams)
    console.log(error, loading)

    if (teams.length === 0) {
        return (
            <AppLayout>
                <EmptyTeamsList
                    title={"Empty here"}
                    textForm={"Add new teams to continue"}
                    image={<EmptyTeamsListImgStyled/>}/>
            </AppLayout>
        )
    } else {
        return (
            <ListItemsFormLayout>
                <SearchPanel />
                <ListItem items={teams} itemClickHandler={teamClickHandler}/>
            </ListItemsFormLayout>
        )
    }
}

export default withRouter(TeamsPage)


const EmptyTeamsListImgStyled = styled(EmptyTeamsListImg)`
  @media screen and (max-width: 1110px) {
    width: 339px;
    height: 225px;
  }
`
