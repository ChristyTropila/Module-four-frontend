import React from 'react';
import NavbarContainer from './NavbarContainer'

import '../App.css';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <h1>Hello Welcome to My home page</h1>
      <NavbarContainer/>
      {/* <LoginContainer/> */}

    </div>
  );
}
}

export default App;
