import React, {useEffect} from 'react';
import {AuthRoutes} from "../../routes/Routes"
import {loginActions} from '../../modules/auth/singIn/singInSlice'
import {useDispatch} from 'react-redux'


function App() {
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(loginActions.returnToken())
    // }, [dispatch])

    return (
            <AuthRoutes/>
    );
}

export default App;
