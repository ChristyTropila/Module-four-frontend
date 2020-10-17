import React from 'react'
import Map from './Map'


class MapContainer extends React.Component{
    render(){
        return(
            <div>
                <p>Welcome to tric or treat trivia. Each house is waiting for you with a trivia question. Answer correctly and you will get the treat. Answer wrong, and a trick you shall receive </p>
                <Map/>
            </div>
        )
    }
}


export default MapContainer;