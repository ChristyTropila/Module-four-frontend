import React from 'react';
import Header from './Header'
import LoginRegisterCont from './LoginRegisterCont'
import MapContainer from './MapContainer'
import '../App.css';

class App extends React.Component {
  
  state={
    houses:[],
    currentUser: ""
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




  render(){
    console.log(this.state.currentUser)
  return (
    <div className="App">
      <h1>Hello Welcome to My home page</h1>
      <Header/>
      <MapContainer houses={this.state.houses} currentUser={this.state.currentUser}/>
      <LoginRegisterCont sendNetToGetUser={this.sendNetToGetUser}/>

    </div>
  );
}
}

export default App;
