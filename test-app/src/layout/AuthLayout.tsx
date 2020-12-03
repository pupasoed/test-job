import React, {FC, ReactNode} from 'react'
import "./AuthLayout.css"
// import SingIn from "../auth/singIn/SingIn"



interface AuthLayoutProps {
    image: ReactNode,
    title?:string
}


export const AuthLayout:FC<AuthLayoutProps> = ({image, title="SingIn", children}) => {

    return(
        <div className="container">
            <div>
                <h1>{title}</h1>
                {children}
            </div>
            <div>{image}</div>
        </div>
    )
};
