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


    render(){
           console.log(this.state.showModal)

        return(
            
            <div className="houses" onClick={this.handleClickedHouse}>
            {this.state.showModal ? <div className="modal-drop"></div> : null}

          
              <h3>House: {this.props.listOfHouses.id}</h3>
              <h4>{this.props.listOfHouses.lat}</h4>
              <h4>{this.props.listOfHouses.lng}</h4>
            
               
              <Modal  showModal={this.state.showModal} triviaQs={this.state.triviaQs}/>
         
            </div>
            
        )
    }
}

export default Map