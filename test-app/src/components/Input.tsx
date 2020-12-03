import React, {FC, ReactNode} from 'react'
import "./Input.css"


interface AuthLayoutProps {
    placeholder: string
    label?: string
    icon?: ReactNode
}

const Input:FC<AuthLayoutProps> = ({label, placeholder}) => {
    return(
        <div>
            {label && <label className="label">{label}</label>}
            <input className="inputs" placeholder={placeholder}/>
        </div>
    )
};

export default Input