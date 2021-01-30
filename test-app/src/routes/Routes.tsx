import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { Login } from '../modules/auth/singIn/loginPage'
import { Register } from '../modules/auth/singUp/RegisterPage'
import { PlayersPage } from '../modules/players/PlayerPage'
import { TeamsPage } from "../modules/teams/teamsPage";
import { PrivateRoute } from "./privateRoute";
import { TeamPage } from "../modules/teamPage/teamPage";


export const AuthRoutes = () => {
    return (
        <Router>
            <PrivateRoute reverse={'auth'} path="/login" ><Login /></PrivateRoute>
            <PrivateRoute reverse={'auth'} path="/register" ><Register /></PrivateRoute>
            {/*<PrivateRoute reverse={'auth1'} path="/" component={Login} exact />*/}
            <PrivateRoute reverse={'app'} path="/players/" exact><PlayersPage /></PrivateRoute>
            <PrivateRoute reverse={'app'} path="/teams/" exact><TeamsPage /></PrivateRoute>
            <PrivateRoute reverse={'app'} path="/teams/item" exact><TeamPage /></PrivateRoute>
            {/*<PrivateRoute path={"/"} exact><TeamsPage /></PrivateRoute>*/}
        </Router>
    );
}