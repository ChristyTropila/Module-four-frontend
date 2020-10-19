import React from 'react'
import {Link} from 'react-router-dom'

class Bucket extends React.Component{


 handleClick=(evt)=>{
     console.log(evt.target.value, "clicked")
 }

render(){
    console.log(this.props)
  
     return(
      <div>
          <h1>hello inside</h1>
            {this.props.callback.map((item)=>{
                return<div>
                <li className="bucket-list" key={item.id}>{item.name}</li>
                <button value={item.id} onClick={this.handleClick}>Delete</button>
                </div>
            })}
                {this.props.sendNames.map((item)=>{
                return<div>
                <li className="bucket-list" key={item.id}>{item.name}</li>
                <button value={item.id} onClick={this.handleClick}>Delete</button>
                </div>
            })}
            <Link to="/map">Back To map</Link>
      </div>
     )
    }
}

export default Bucket