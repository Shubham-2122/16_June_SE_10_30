// State  : it's simple type of varible
// state : same compoennt use
// state we can change possible 
// state : class and function
// this.state : defined 
// this.setState() : function chnage karva

import React, { Component } from 'react'

class ClassState extends Component {

    constructor(){
        super()
        this.state = {
            name : "het",
            counter : 0,
            isimage : true
        }
    }
  render() {
    // console.log(this.state)
    return (
      <div>
        <h1>Name : {this.state.name}</h1>
        <button onClick={()=>this.setState({name:"roshan"})}>Change name</button>
        <button onClick={()=>this.setState({name:"divya"})}>Change name 2</button>

        <h1>Count : {this.state.counter}</h1>
      </div>
    )
  }
}

export default ClassState