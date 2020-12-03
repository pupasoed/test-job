import React from 'react';
import './App.css';
import {AuthLayout} from "./layout/AuthLayout";
import SingIn from "./auth/singIn/SingIn";
import {ReactComponent as SignInImage} from "./assets/img/signIn.svg";

function App() {
  return (
    <div>
        <AuthLayout image={<SignInImage/>}>
            <SingIn/>
        </AuthLayout>
    </div>
  );
}

export default App;
