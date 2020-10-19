import React from 'react'
 import {Redirect} from 'react-router-dom'

class LoginContainer extends React.Component{

    state={
        name: "",
        userName: "",
        password: "",
        userNameLogin: "",
        passwordLogin: "",
        redirectToHome: false
    }

  //this sets the state to what the user types
handleInputChange=(evt)=>{
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  //make fetch request to create new user, redirect to map
handleSubmit=(evt)=>{
     evt.preventDefault()
     fetch('http://localhost:4000/users', {
         method: 'POST',
         headers: {
            "Content-Type": 'Application/json'
          },
          body: JSON.stringify({
              name: this.state.name,
              userName: this.state.userName,
              password: this.state.password
          })
     })
     .then(res=>res.json())
     .then((newUser)=> {
         this.props.sendNetToGetUser(newUser)
       this.setState({
           redirectToHome: true
       })
     })

  }

  handleLoginSubmit=(evt)=>{

  }


    render(){

        //condition to check the state of the redirect prop
        if(this.state.redirectToHome){
            return <Redirect to="/map"/>
        }

 return(
    <div className="create-account">
        <form className="create-account"  onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Name" />
            <input type="text" name="userName" value={this.state.userName} onChange={this.handleInputChange} placeholder="UserName" />
            <input type="text" name="password"  value={this.state.password} onChange={this.handleInputChange} placeholder="Password" />
          </div>
          <button className="button" type="submit">
            Create Account
          </button>
        </form>
        <form className="login-account"  onSubmit={this.handleLoginSubmit}>
          <div className="inline fields">
            <input type="text" name="userNameLogin" value={this.state.userNameLogin} onChange={this.handleInputChange} placeholder="User Name" />
            <input type="text" name="passwordLogin"  value={this.state.passwordLogin} onChange={this.handleInputChange} placeholder="Password" />
          </div>
          <button className="button" type="submit">
            Login
          </button>
        </form>

      </div>
        )
    }
}

export default LoginContainer