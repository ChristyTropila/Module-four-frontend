import React from 'react';
import Header from './Header'
import LoginRegisterCont from './LoginRegisterCont'
import MapContainer from './MapContainer'
import Bucket from './Bucket'
import '../App.css';
import { isCompositeComponentWithType } from 'react-dom/test-utils';

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
    let list=[]
   
    this.state.bucket.map((item)=>{
      this.setState({
        names: []
      })
      let innerList=[]
        item.map((individual)=>{
            fetch(`http://localhost:4000/trick_treats/${individual.trick_treat_id}`, {
                headers : { 
                    'Accept': 'application/json'
                   }
            })
            .then(res=>res.text())
            .then((names)=>{
              let copyOfState=[...this.state.names, names]
              this.setState({
                names: copyOfState
              })
        
        })     
})

// list.push(innerList)
// this.setState({
//   names: list
// })
})



}



  render(){

   
  return (
    <div className="App">
      <h1>Hello Welcome to My home page</h1>
      <Header/>
     {this.state.bucket.length!=0 ? <Bucket callback={this.state.names} /> : null }
      <MapContainer getListOfNames={this.getListOfNames} sendNetToGetBucket={this.sendNetToGetBucket} houses={this.state.houses} currentUser={this.state.currentUser}/>
      <LoginRegisterCont sendNetToGetUser={this.sendNetToGetUser}/>

    </div>
  );
}


}




export default App;
