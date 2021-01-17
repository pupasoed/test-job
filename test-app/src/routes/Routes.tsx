import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Login} from '../auth/singIn/loginPage'
import {Register} from '../auth/singUp/RegisterPage'
import {PlayersPage} from '../components/pages/PlayerPage'



export const AuthRoutes = () => {
    return (
        <Router>
            <Route path="/login" component={Login} />
            {/*<Route path="/" component={Login} />*/}
            <Route path="/register" component={Register} />
            <Route path="/players" component={PlayersPage} />
        </Router>
    );
};