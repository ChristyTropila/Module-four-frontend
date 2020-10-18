import React from 'react'
import LoginContainer from './LoginRegisterCont'
import Modal from './Modal'




class Map extends React.Component{
    

    state={
        showModal: false,
        triviaQs: []
    }

    //fetch the trivia questions and if haunted_house id matches target, add to state and change modal to true
    handleClickedHouse=(evt)=>{
     evt.preventDefault()
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

  handleModalClick=(evt)=>{
      evt.preventDefault()
  }


  
    render(){
           console.log(this.state.showModal)

       
        return(
        <>
          {this.state.showModal ? <Modal showModal={this.state.showModal} triviaQs={this.getRandomTrivia()}/>: null}
           <div className={this.state.showModal ? "houses-2" : "houses"} onClick={this.handleClickedHouse}>
         
              <h3>House: {this.props.listOfHouses.id}</h3>
              <h4>{this.props.listOfHouses.lat}</h4>
              <h4>{this.props.listOfHouses.lng}</h4>
              </div>
            

           </> 
        )
    }
}

export default Map