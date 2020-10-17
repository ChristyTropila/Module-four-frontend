import React from 'react';
import Header from './Header'
import LoginRegisterCont from './LoginRegisterCont'
import MapContainer from './MapContainer'

import '../App.css';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <h1>Hello Welcome to My home page</h1>
      <Header/>
      <MapContainer/>
      <LoginRegisterCont/>

    </div>
  );
}
}

export default App;
