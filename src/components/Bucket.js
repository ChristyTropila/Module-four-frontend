import React from 'react'


class Bucket extends React.Component{

 handleClick=(evt)=>{
     console.log("clicked")
 }
    render(){
     return(
      <div>
          <h1>hello inside</h1>

            {this.props.callback.map((item)=>{
                return<div>
                <li className="bucket-list" key={item.id}>{item.name}</li>
                <button onClick={this.handleClick}>Delete</button>
                </div>
            })}
 
      </div>
     )
    }
}

export default Bucket