import React from 'react'


class Bucket extends React.Component{


    findNameOfBucketItemsById(){
      let nameContainer=[]
        let bucketArray=this.props.bucketItems.map((item)=>{
            item.map((individual)=>{
                fetch(`http://localhost:4000/trick_treats/${individual.trick_treat_id}`, {
                    headers : { 
                        'Accept': 'application/json'
                       }
                })
                .then(res=>res.text())
                .then((names)=>{
                    nameContainer.push(names)
                    console.log(nameContainer)
                })
            })      
            console.log(nameContainer)
    })
 
   
    
    }



    render(){
      this.findNameOfBucketItemsById()

     return(
      <div>
          <h1>Hello from bucket</h1>
      </div>
     )
    }
}

export default Bucket