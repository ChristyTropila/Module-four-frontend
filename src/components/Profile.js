import React from 'react'

class Profile extends React.Component{

    state={
        name: "",
        userName: "",
        modalOpen: false
    }

    handleClick=(evt)=>{
       this.setState({
           modalOpen: true
       })
    }

  
    render(){

       let {name, userName}=this.props.currentUser
        console.log(this.props.currentUser)
        return(
            <div>
            <h1>Hello {name}</h1>
            <h2>Your current user name is: {userName}</h2>
            <button onClick={this.handleClick}>Edit Info</button>
           
            </div>
        )
    }
}


export default Profile