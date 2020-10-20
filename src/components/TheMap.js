import React from 'react'
// import LoginContainer from './LoginRegisterCont'
import Modal from './Modal'
// import  {Redirect} from 'react-router-dom'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import mapStyles from './mapStyles'
import API_K from './config_keys'





let icons=['https://snazzy-maps-cdn.azureedge.net/assets/marker-e83f4a4e-720c-46f7-80c9-b1093db48f79.png',
          'https://snazzy-maps-cdn.azureedge.net/assets/marker-11be9faf-9a91-456e-a17a-7237f9d73c3c.png',
          'https://snazzy-maps-cdn.azureedge.net/assets/marker-11be9faf-9a91-456e-a17a-7237f9d73c3c.png',
          'https://snazzy-maps-cdn.azureedge.net/assets/marker-aec4b389-6264-40ad-a887-21568f527d32.png',
          'https://snazzy-maps-cdn.azureedge.net/assets/marker-7fc0d75b-2b22-4e1f-8756-7b96f9b8db6c.png']

 let random=icons[Math.floor(Math.random() * icons.length)];   

class TheMap extends React.Component{
   
state={
    houses:[
        {lat: this.props.houses[0].lat, lng: this.props.houses[0].lng},
        {lat: this.props.houses[1].lat, lng: this.props.houses[1].lng},
        {lat: this.props.houses[2].lat, lng: this.props.houses[2].lng},
        {lat: this.props.houses[3].lat, lng: this.props.houses[3].lng},
        {lat: this.props.houses[4].lat, lng: this.props.houses[4].lng},
        {lat: this.props.houses[5].lat, lng: this.props.houses[5].lng},
        {lat: this.props.houses[6].lat, lng: this.props.houses[6].lng},
        {lat: this.props.houses[7].lat, lng: this.props.houses[7].lng}
        ],
        showModal: false,
        triviaQs: []
    }

    displayMarkers = () => {
        return this.state.houses.map((house, index) => {
          return <Marker icon={random}key={index} id={house.id}  position={{
           lat: house.lat,
           lng: house.lng
         }}
         onClick={() => this.handleClickedHouse(index)} />
         
        })
      }
    closeModal=()=>{
        this.setState({
            showModal:false
        })
    }

//fetch the trivia questions and if haunted_house id matches target, add to state and change modal to true
    handleClickedHouse=(index)=>{
    
      fetch('http://localhost:4000/trivia')
      .then(res=> res.json())
      .then((triviaArray)=>{
          triviaArray.forEach((trivia)=>{
              
              if (trivia.haunted_house.id===index){
                let copyOfTrivia=[...this.state.triviaQs, trivia]
               this.setState({
                  showModal:true,
                  triviaQs: copyOfTrivia
               })
            
          }
    })
 })

}

getRandomTrivia=()=>{
return this.state.triviaQs[Math.floor(Math.random() * this.state.triviaQs.length)]
  }

  handleModalClick=(evt)=>{
      evt.preventDefault()
  }

  sendDownNetForTreats=(returnedTreats)=>{
     console.log(returnedTreats)
  }


  
    render(){
        console.log(process.env.REACT_APP_GOOGLE_API_KEY)


        return (
        <div className={this.state.modal ? "houses-2" : "houses"} 
        style={{
             position: "relative",
              width: "100%", 
              height: "1100px"
            //   height: "calc(100vh - 20px)"
              
            }} className="map"
          >
        {this.state.showModal ? <Modal closeModal={this.closeModal} getListOfNames={this.props.getListOfNames}  sendNetToGetBucket={this.props.sendNetToGetBucket} currentUser={this.props.currentUser} showModal={this.state.showModal} getTreatsMethod={this.sendDownNetForTreats} triviaQs={this.getRandomTrivia()}/>: null}
        {/* <div className={this.state.showModal ? "houses-2" : "houses"} onClick={this.handleClickedHouse}> */}
            <Map
              google={this.props.google}
              zoom={13}
              styles={mapStyles.styles}
              initialCenter={{ lat: 40.7812, lng: -73.9665}}
              disableDefaultUI= {true}

            >
              {this.displayMarkers()}
            </Map>
            </div>
           
        );
      }
    }
    export default GoogleApiWrapper({
        apiKey: API_K
      })(TheMap)



//        console.log(this.state.houses)

//         if(!this.props.currentUser){
//         return  <Redirect to="/"/>
//         }
    
//         return(
//         <div className="container">
//           {this.state.showModal ? <Modal closeModal={this.closeModal} getListOfNames={this.props.getListOfNames}  sendNetToGetBucket={this.props.sendNetToGetBucket} currentUser={this.props.currentUser} showModal={this.state.showModal} getTreatsMethod={this.sendDownNetForTreats} triviaQs={this.getRandomTrivia()}/>: null}
//            <div className={this.state.showModal ? "houses-2" : "houses"} onClick={this.handleClickedHouse}>
         
//               <h3>House: {this.props.listOfHouses.id}</h3>
//               <h4>{this.props.listOfHouses.lat}</h4>
//               <h4>{this.props.listOfHouses.lng}</h4>
//               </div>
            

//            </div>
//         )
//     }
// }

// export default TheMap