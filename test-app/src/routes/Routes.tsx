import React from 'react'
import {BrowserRouter as Router, Redirect, Switch} from "react-router-dom";
import {Register} from '../modules/auth/singUp/RegisterPage'
import PlayersPage from '../modules/players/playersPage'
import TeamsPage from "../modules/teams/teamsPage";
import {PrivateRoute} from "./privateRoute";
import {TeamPage} from "../modules/teamPage/teamPage";
import {PlayerPage} from "../modules/playerPage/playerPage";
import {AddPlayer} from "../modules/addNewPalyer/addNewPlayer";
import {LoginPage} from "../modules/auth/login/LoginPage";


export const AuthRoutes = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute reverse={'auth'} path="/login"><LoginPage/></PrivateRoute>
                <PrivateRoute reverse={'auth'} path="/register"><Register/></PrivateRoute>
                <PrivateRoute reverse={'app'} path="/players/new/" exact>< TeamsPage/><AddPlayer/></PrivateRoute>
                <PrivateRoute reverse={'app'} path="/teams/new/" exact>< TeamsPage/><AddPlayer/></PrivateRoute>
                <PrivateRoute reverse={'app'} path="/teams/:id" exact>< TeamPage/></PrivateRoute>
                <PrivateRoute reverse={'app'} path="/players/:id"><PlayerPage/></PrivateRoute>
                <PrivateRoute reverse={'app'} path="/players/" exact><PlayersPage/></PrivateRoute>
                <PrivateRoute reverse={'app'} path="/teams/" exact>< TeamsPage/></PrivateRoute>
                <Redirect to={"/teams/"} from={"*"}/>
            </Switch>
        </Router>
    );
}