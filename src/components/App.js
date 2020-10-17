import React from 'react';
import Header from './Header'
import LoginRegisterCont from './LoginRegisterCont'
import MapContainer from './MapContainer'
import '../App.css';

class App extends React.Component {
  
  state={
    houses:[]
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


  render(){
  return (
    <div className="App">
      <h1>Hello Welcome to My home page</h1>
      <Header/>
      <MapContainer houses={this.state.houses}/>
      <LoginRegisterCont/>

    </div>
  );
}
}

export default App;
