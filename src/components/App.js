import React from 'react';
import Header from './Header'
import LoginRegisterCont from './LoginRegisterCont'
import MapContainer from './MapContainer'
import Bucket from './Bucket'
import '../App.css';
import {Route, Switch, Link, Redirect} from 'react-router-dom'
import Profile from './Profile'
import EditProfile from './EditProfile'

class App extends React.Component {
  
  state={
    houses:[],
    currentUser: "",
    returningBucket: [],
    bucket: [],
    names: [],
    returningUserNames: []
}

componentDidMount(){
    fetch('http://localhost:4000/haunted_houses')
    .then(res=>res.json())
    .then((houseArray) => {
      this.setState({
        houses: houseArray
      })
    })
}



  sendNetToGetBucket=(bucket)=>{
    let copyOfBucket=[...this.state.bucket, bucket]
   this.setState({
     bucket: copyOfBucket
   })
  }
  sendNetToGetUser=(user)=>{
    this.setState({
      currentUser: user
    })
  }
  sendUserToApp=(user)=>{
    this.setState({
      currentUser: user,
      returningBucket: user.trick_treats
    })
    this.state.returningBucket.map((item)=>{
      fetch(`http://localhost:4000/trick_treats/${item.id}`, {
        headers : { 
            'Accept': 'application/json'
           }
    })
    .then(res=>res.json())
    .then((names)=>{
      let copyOfState=[...this.state.returningUserNames, names]
      this.setState({
       returningUserNames: copyOfState
      })

    })

  })
  }


 getListOfNames=()=>{
    this.state.bucket.map((item)=>{
      this.setState({
        names: []
      })
        item.map((individual)=>{
            fetch(`http://localhost:4000/trick_treats/${individual.trick_treat_id}`, {
                headers : { 
                    'Accept': 'application/json'
                   }
            })
            .then(res=>res.json())
            .then((names)=>{
              let copyOfState=[...this.state.names, names]
              this.setState({
                names: copyOfState
              })
        })      
})
})
}

updateCurrentUser=(updatedUser)=>{
 this.setState({
   currentUser: updatedUser
 })
}



  render(){

    console.log(this.state.returningBucket)

  return (
    <div className="App">
      <Header/>

     <Route path="/bucket">
   <Bucket sendNames={this.state.names} callback={this.state.returningUserNames} /> 
     </Route>

     <Switch>

      <Route path="/profile" >
       <Profile currentUser={this.state.currentUser}/>
      </Route>

      <Route path="/editProfile">
      <EditProfile currentUser={this.state.currentUser} updateCurrentUser={this.updateCurrentUser}/>
      </Route>

      <Route path="/map">
      <aside className="sidebar">
        <ul>
          <li>
            <Link to="/profile" >View Profile</Link>
          </li>
          <li>
          <Link to="/map">Map</Link>
          </li>
          <li>
          <Link to="/bucket">Bucket</Link>
          </li>
        </ul> 
      </aside>
      <MapContainer getListOfNames={this.getListOfNames} sendNetToGetBucket={this.sendNetToGetBucket} houses={this.state.houses} currentUser={this.state.currentUser}/>
      </Route>

      <Route path="/login" >
      <LoginRegisterCont sendUserToApp={this.sendUserToApp} sendNetToGetUser={this.sendNetToGetUser}/>
      </Route>

      </Switch>

    </div>
  );
}


}




export default App;
