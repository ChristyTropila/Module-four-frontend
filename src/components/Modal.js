

import React, { Component } from 'react'
import '../App.css';

class Modal extends React.Component{
    state={
        selected: 0
    }
  
        //grab a random trivia question from the array

  render(){
console.log(this.props.triviaQs)
let triviaInfo=this.props.triviaQs
console.log(triviaInfo.question)



    return ( 
  <div className="modal-wrapper"
    style={{
        transform: this.props.showModal ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: this.props.showModal ? '1' : '0'
    }}
    >
  
     <h1>{triviaInfo.question}</h1>
      
       </div>
   )

}
}

export default Modal