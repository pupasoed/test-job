import React from 'react';
import {AuthRoutes} from "../../routes/Routes"
import {Provider} from 'react-redux'
import {store} from "../../store";


function App() {
    return (
        <Provider store={store}>
            <AuthRoutes/>
        </Provider>
    );
}

export default App;
