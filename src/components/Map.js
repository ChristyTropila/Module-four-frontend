import React from 'react'
import Modal from './Modal'
class Map extends React.Component{

    state={
        showModal: false,
        triviaQs: []
    }

    //fetch the trivia questions and if haunted_house id matches target, add to state and change modal to true
    handleClickedHouse=(evt)=>{
      console.log(this.props.listOfHouses.id)
      fetch('http://localhost:4000/trivia')
      .then(res=> res.json())
      .then((triviaArray)=>{
          triviaArray.forEach((trivia)=>{
              
              if (trivia.haunted_house.id===this.props.listOfHouses.id){
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
    render(){
           console.log(this.state.showModal)

        return(
        <>
        <div className="houses" onClick={this.handleClickedHouse}>
        {this.state.showModal ? <div className="modal-drop"></div> : null}

            {this.state.showModal ? <Modal className="modal-drop" showModal={this.state.showModal} triviaQs={this.getRandomTrivia()}/>  : null}
          
              <h3>House: {this.props.listOfHouses.id}</h3>
              <h4>{this.props.listOfHouses.lat}</h4>
              <h4>{this.props.listOfHouses.lng}</h4>
            
               
         
            </div>

           </> 
        )
    }
}

export default Map