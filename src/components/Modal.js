

import React, { Component } from 'react'
import '../App.css';

class Modal extends React.Component{
    state={
     selectedOption: 'option1'
    
    }

    handleChange=(evt)=>{
    this.setState({
       selectedOption: evt.target.name
        })
    }


   handleSubmit=(evt)=>{
       evt.preventDefault()
   }

        //grab a random trivia question from the array

        // radioButtons=(evt)=>{
        //     this.state.selectedOption(evt.target.value)
        // }

  render(){

let triviaInfo=this.props.triviaQs

    return ( 
  <div  className="modal-wrapper"
    style={{
        transform: this.props.showModal ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: this.props.showModal ? '1' : '0'
    }}
    >
        <form onSubmit={this.handleSubmit}>
          <div className="radio"  >
              <h4>{triviaInfo.question}</h4>
              <label>
                  <input type="radio" name="answer" value="answer" checked={this.state.selectedOption==="answer"} onChange={this.handleChange} />
                 {triviaInfo.answer}
              </label>
          </div>
          <div className="radio"  >
              <label>
                  <input type="radio" name="option1"  value="option1" checked={this.state.selectedOption==="option1"} onChange={this.handleChange} />
                  {triviaInfo.option1}
              </label>
          </div>
          <div className="radio"  >
              <label>
                  <input type="radio"  name="option2" value="option2" checked={this.state.selectedOption==="option2"} onChange={this.handleChange} />
                  {triviaInfo.option2}
              </label>
          </div>
          <div className="radio"   >
              <label>
                  <input type="radio" name="option3" value="option3" checked={this.state.selectedOption==="option3"} onChange={this.handleChange} />
               {triviaInfo.option3}
              </label>
          </div>
          <button className="btn btn-default" type="submit">Submit</button>

        </form>
       </div>
   )

}
}

export default Modal