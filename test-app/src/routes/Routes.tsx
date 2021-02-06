import React from 'react'
import {BrowserRouter as Router, Redirect, Switch} from "react-router-dom";
import { Login } from '../modules/auth/singIn/loginPage'
import { Register } from '../modules/auth/singUp/RegisterPage'
import PlayersPage from '../modules/players/playersPage'
import TeamsPage from "../modules/teams/teamsPage";
import { PrivateRoute } from "./privateRoute";
import { TeamPage } from "../modules/teamPage/teamPage";


export const AuthRoutes = () => {
    return (
        <Router>
            <Switch>
            <PrivateRoute reverse={'auth'} path="/login" ><Login /></PrivateRoute>
            <PrivateRoute reverse={'auth'} path="/register" ><Register /></PrivateRoute>
            <PrivateRoute reverse={'app'} path="/teams/:id" exact>< TeamPage /></PrivateRoute>
            <PrivateRoute reverse={'app'} path="/players/:id" ><TeamPage /></PrivateRoute>
            <PrivateRoute reverse={'app'} path="/players/" exact><PlayersPage /></PrivateRoute>
            <PrivateRoute reverse={'app'} path="/teams/" exact>< TeamsPage /></PrivateRoute>
            <Redirect to={"/teams/"} from={"*"}/>
            </Switch>
        </Router>
    );
}