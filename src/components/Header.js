import React from 'react'

class Header extends React.Component{
    handleButtonClick=(evt)=>{
        console.log(evt.target, "clicked")
    }
    render(){
      
        return(
            <div className="header">
                <h1>Hello from header!</h1>
                {/* <button onClick={this.handleButtonClick}>Restart game</button> */}
            </div>
        )
    }
}

export default Header