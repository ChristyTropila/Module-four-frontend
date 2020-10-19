
import React from 'react'
import '../App.css';

class Modal extends React.Component{
    state={
     selectedOption: 'option1',
     
    }
 

handleChange=(evt)=>{
    this.setState({
       selectedOption: evt.target.value
        })
    }

   handleSubmit=(evt)=>{
       let bucketItems
       evt.preventDefault();
     if(this.state.selectedOption ==="answer"){
       bucketItems=(this.returnAllTreats()) 
     }else if(this.state.selectedOption==="option1" || this.state.selectedOption==="option2" || this.state.selectedOption==="option3"){
       bucketItems=(this.returnAllTricks())
     }
     fetch('http://localhost:4000/buckets', {
         method: 'POST',
         headers: {
            "Content-Type": 'Application/json'
          },
          body: JSON.stringify({
              user_id: this.props.currentUser.id,
              trick_treat_id: bucketItems,
          })
     })
     .then(res => res.json())
     .then((buckets)=> {
         this.props.sendNetToGetBucket(buckets)
         this.props.getListOfNames()
         this.props.closeModal()
     })
 

   }


   returnAllTreats=()=>{
       let treats=[]
       this.props.triviaQs.haunted_house.trick_treats.map((treat)=> {
           if(treat.category===1){
          treats.push(treat.id)
           }
        
       })
       return treats
   }

   returnAllTricks=()=>{
   let tricks=[]
       this.props.triviaQs.haunted_house.trick_treats.map((treat)=> {
       if(treat.category===2){
          tricks.push(treat.id)
           }
        
       })
       return tricks
   }
   

  render(){


let triviaInfo=this.props.triviaQs

const {selectedOption}=this.state
    return ( 
  <div className="modal-wrapper"
    style={{
        transform: this.props.showModal ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: this.props.showModal ? '1' : '0'
    }}
    >
        <form onSubmit={this.handleSubmit}>
          <div className="radio"  >
              <h4>{triviaInfo.question}</h4>
              <h3>CurrentValue is: {selectedOption}</h3>
              <label>
                  <input type="radio" name="answer" value="answer" checked={selectedOption==="answer"} onChange={this.handleChange} />
                 {triviaInfo.answer}
              </label>
          </div>
          <div className="radio"  >
              <label>
                  <input type="radio" name="option1"  value="option1" checked={selectedOption==="option1"} onChange={this.handleChange} />
                  {triviaInfo.option1}
              </label>
          </div>
          <div className="radio"  >
              <label>
                  <input type="radio"  name="option2" value="option2" checked={selectedOption==="option2"} onChange={this.handleChange} />
                  {triviaInfo.option2}
              </label>
          </div>
          <div className="radio"   >
              <label>
                  <input type="radio" name="option3" value="option3" checked={selectedOption==="option3"} onChange={this.handleChange} />
               {triviaInfo.option3}
              </label>
          </div>
          <input className="btn btn-default" onSubmit={this.handleSubmit} type="submit" value="submit"/>

        </form>
       </div>
   )

}
}

export default Modal