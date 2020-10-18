import React from 'react'


class Bucket extends React.Component{

    state={
        nameContainer:[]
    }


    nameContainer=[]
     componentDidMount(){
        this.props.bucketItems.map((item)=>{
            item.map((individual)=>{
                fetch(`http://localhost:4000/trick_treats/${individual.trick_treat_id}`, {
                    headers : { 
                        'Accept': 'application/json'
                       }
                })
                .then(res=>res.text())
                .then((names)=>{
               this.nameContainer.push(names)
            })    
   
    })
    })
    // this.setState({
    //     nameContainer: nameContainer
    // })

}



    render(){
      this.componentDidMount()
   
    //    let arrayOfNames=this.nameContainer.forEach((name)=>{
    //        console.log(name)
    //        return<li>name</li>
    //    })
    // let arrayOfNames=this.findNameOfBucketItemsById().forEach((individual)=>{
    //     return <li>{individual}</li>
    //   })
 

     return(
      <div>
          <h1>hello inside</h1>
        <ul>
            {this.nameContainer.map(function(name, index){
                return<li key={index}>{name}</li>
            })}
        </ul>
      </div>
     )
    }
}

export default Bucket