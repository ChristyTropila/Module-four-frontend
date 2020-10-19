import React from 'react';
import Header from './Header'
import LoginRegisterCont from './LoginRegisterCont'
import MapContainer from './MapContainer'
import Bucket from './Bucket'
import '../App.css';
import {Route, Switch, Link} from 'react-router-dom'
import Profile from './Profile'
import EditProfile from './EditProfile'

class App extends React.Component {
  
  state={
    houses:[],
    currentUser: "",
    bucket: [],
    names: []
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


  sendNetToGetUser=(user)=>{
    this.setState({
      currentUser: user
    })
  }

  sendNetToGetBucket=(bucket)=>{
    let copyOfBucket=[...this.state.bucket, bucket]
   this.setState({
     bucket: copyOfBucket
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
    console.log(this.state.names)

  return (
    <div className="App">
      <Header/>
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
      <Route path="/bucket">
     {this.state.bucket.length!==0 ? <Bucket callback={this.state.names} /> : null}
     </Route>
     {/* <Profile/> */}
     <Switch>
      <Route path="/profile" component={Profile}>
       <Profile currentUser={this.state.currentUser}/>
      </Route>
      <Route path="/editProfile">
      <EditProfile currentUser={this.state.currentUser} updateCurrentUser={this.updateCurrentUser}/>
      </Route>

      <Route path="/map">
      <MapContainer getListOfNames={this.getListOfNames} sendNetToGetBucket={this.sendNetToGetBucket} houses={this.state.houses} currentUser={this.state.currentUser}/>
      </Route>
      <Route path="/login" component={LoginRegisterCont}>
      <LoginRegisterCont sendNetToGetUser={this.sendNetToGetUser}/>
      </Route>

      </Switch>

    </div>
  );
}


}




export default App;
