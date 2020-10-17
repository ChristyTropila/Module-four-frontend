import React from 'react'
import Map from './Map'


const MapContainer=(props)=>{

    let houseArray=props.houses.map((house)=>{
        return<Map
        key={house.id}
        listOfHouses={house}
        />
    })

        return(
            <div className="houses">
                <p>Welcome to tric or treat trivia. Each house is waiting for you with a trivia question. Answer correctly and you will get the treat. Answer wrong, and a trick you shall receive </p>
                {houseArray}
            </div>
        )
    }


export default MapContainer;