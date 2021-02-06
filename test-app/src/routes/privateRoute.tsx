import React, {FC} from 'react';
import {Redirect, Route, RouteProps} from 'react-router-dom'
import {RootState} from "../reducers";
import { useSelector } from 'react-redux';


interface IProps extends RouteProps{
    reverse: "auth" | "app";
}

export const PrivateRoute: FC<IProps> = ({children, reverse, ...rest}) => {
    // const isAuthenticated = !!localStorage.getItem('user')
    const isAuthenticated = useSelector((state: RootState) => state.loginReducer.user)
    const authenticated = () => {
        if (reverse === 'auth') return !isAuthenticated ? children : <Redirect to={{pathname: '/teams/'}}/>
        if (reverse === 'app') return isAuthenticated ? children : <Redirect to={{pathname: '/login/'}}/>
    }

    return (
        <Route
            {...rest}
            render={authenticated}
        />
    )
}
