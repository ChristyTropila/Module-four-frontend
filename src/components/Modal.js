import React from 'react'


const Modal=({showModal, triviaQs})=>{
    
        //if showModal is true, change class
        const showHideClassName = showModal ? "modal display-block" : "modal display-none";
    
        //grab a random trivia question from the array
       let pickRandomTriva=triviaQs[Math.floor(Math.random() * triviaQs.length)]
    
      
      console.log(pickRandomTriva)
        
      
        return(
            <div className={showHideClassName}>
            <section className="modal-main">
          
            
            </section>
          </div>
        )
    
}



export default Modal