
import React, { Component } from 'react'
import '../App.css';

const Modal=({showModal, triviaQs})=>{

            //if showModal is true, change class
     //   const showHideClassName = showModal ? "modal display-block" : "modal display-none";
    
        //grab a random trivia question from the array
    //    let pickRandomTriva=triviaQs[Math.floor(Math.random() * triviaQs.length)]
    //    console.log(triviaQs)
    //    console.log(pickRandomTriva)
    return ( 
    <div className="modal-wrapper"
    style={{
        transform: showModal ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: showModal ? '1' : '0'
    }}
    >

           <div className="modal-header">
               <p>Trick or Treat!</p>
               <span className="submit">Submit</span>
           </div>
           <div className="modal-content">
               <div className="modal-body">
                   <h4>test</h4>
               </div>
           </div>
       </div>
   )

}

export default Modal