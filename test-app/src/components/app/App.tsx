import React, {useEffect} from 'react';
import {AuthRoutes} from "../../routes/Routes";
import {useDispatch} from 'react-redux';
import {loginActions} from "../../modules/auth/login/singInSlice";


function App() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loginActions.returnUser())
    }, [dispatch])

    return (
        <AuthRoutes/>
    );
}

export default App;
