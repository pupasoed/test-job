import React from 'react'
import {ServiceConsumer} from '../service-context/ServiceContext'

const withStorService = () => (Wrapped) => {
    return (props) => {
        return (
            <ServiceConsumer>
                {
                    (StorService) =>{
                        return(
                            <Wrapped {...props} StorService = {StorService}/>
                        )
                    }
                }
            </ServiceConsumer>
            )
    }
}

export default withStorService