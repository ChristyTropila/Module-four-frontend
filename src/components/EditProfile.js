import React from 'react'
// import {Redirect} from 'react-router-dom'

class EditProfile extends React.Component{

    state={
        name: "",
        userName: ""
    }

    
  //this sets the state to what the user types
handleInputChange=(evt)=>{
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

handleSubmit=(evt)=>{
     evt.preventDefault()
     fetch(`http://localhost:4000/users/${this.props.currentUser.id}`,{
         method: 'PATCH',
         headers: {
            "Content-Type": 'Application/json'
          },
          body: JSON.stringify({
              name: this.state.name,
              userName: this.state.userName
          })
     })
     .then(res=>res.json())
     .then((newUser)=> {
        this.props.updateCurrentUser(newUser)
  
     })

  }




 render(){
     
   
   return(
    <div className="edit-account">
        <form className="edit-account" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Name" />
            <input type="text" name="userName" value={this.state.userName} onChange={this.handleInputChange} placeholder="UserName" />
          </div>
          <button className="button" type="submit">
            Edit Profile
          </button>
        </form>
        </div>
 )
    }
}

export default EditProfile