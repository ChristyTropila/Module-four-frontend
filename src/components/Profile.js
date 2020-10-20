import React from 'react'

import {Link} from 'react-router-dom'



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
        return(
            <div>
            <h1>Hello {name}</h1>
            <h2>Your current user name is: {userName}</h2>
            <Link to="/editProfile">Edit Profile</Link>
            <Link to="/map">Back To map</Link>
            </div>
        )
    }
}


export default Profile