import React from 'react'


class Bucket extends React.Component{

//    state={
//     nameContainer:[]
//    }

//    copyOfState=[...this.state.nameContainer]


// // setTheState(){
// //     this.setState({
// //         nameContainer: this.copyOfState
// //     })
// // }



    render(){
 
        console.log(this.props.callback)
    
    //    let arrayOfNames=this.props.callback.forEach((name)=>{
           
    //    })
   
    //   this.setTheState()

     return(
      <div>
          <h1>hello inside</h1>
        
          <ul>
            {this.props.callback.map(function(name, index){
                return<li className="bucket-list" key={index}>{name}</li>
            })}
        </ul>  
      </div>
     )
    }
}

export default Bucket