import React, {FC} from 'react';
import {Redirect, Route, RouteProps} from 'react-router-dom'
import {RootState} from "../reducers";
import { useSelector } from 'react-redux';


interface IProps extends RouteProps{
    reverse?: string;
}

export const PrivateRoute: FC<IProps> = ({children, reverse, ...rest}) => {
    const isAuthenticated = !!localStorage.getItem('user')
    // const isAuthenticated = useSelector((state: RootState) => state.loginReducer.user?.name)
    const authenticated = () => {
        if (reverse === 'auth') return !isAuthenticated ? children :
            <Redirect to={{pathname: '/teams'}}/>
        if (reverse === 'app') return isAuthenticated ? children :
            <Redirect to={{pathname: '/login'}}/>
        else
            return isAuthenticated ? <Redirect to={{pathname: '/teams'}}/> :
                <Redirect to={{pathname: '/login'}}/>
    }

    return (
        <Route
            {...rest}
            render={authenticated}
        />
    )
}
