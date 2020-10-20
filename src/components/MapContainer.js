import React from 'react'
import TheMap from './TheMap'


const MapContainer=(props)=>{


    // let houseArray=props.houses.map((house)=>{
    //     return<Map
    //     key={house.id}
    //     listOfHouses={house}
    //     currentUser={props.currentUser}
    //     sendNetToGetBucket={props.sendNetToGetBucket}
    //     getListOfNames={props.getListOfNames} 
    //     />
    // })
    console.log(props.houses)

        return(

            <div className="houses">
                <p>Welcome to tric or treat trivia. Each house is waiting for you with a trivia question. Answer correctly and you will get the treat. Answer wrong, and a trick you shall receive </p>
                {/* {houseArray}
          */}
          <TheMap houses={props.houses} currentUser={props.currentUser} sendNetToGetBucket={props.sendNetToGetBucket} getListOfNames={props.getListOfNames}/>
            </div>
        )
    }


export default MapContainer;