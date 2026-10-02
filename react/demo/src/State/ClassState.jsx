// State  : it's simple type of varible
// state : same compoennt use
// state we can change possible 
// state : class and function
// this.state : defined as object create 
// this.setState() : function state value chnage karva

import React, { Component } from 'react'
import ImageData from './ImageData'

class ClassState extends Component {

  constructor() {
    super()
    this.state = {
      name: "het",
      counter: 0,
      isimage: true
    }
  }
  render() {
    // console.log(this.state)
    return (
      <div>
        <h1>Name : {this.state.name}</h1>
        <button onClick={() => this.setState({ name: "roshan" })}>Change name</button>
        <button onClick={() => this.setState({ name: "divya" })}>Change name 2</button>

        <h1>Count : {this.state.counter}</h1>
        {/*  0 = 0 + 1
             1 = 1 + 1 
        */}
        <button className='btn btn-info' onClick={() => this.setState({ counter: this.state.counter + 1 })}>Increment</button>
        <button className='btn btn-danger' onClick={() => this.setState({ counter: this.state.counter - 1 })}>Decrement</button>
        <button className='btn btn-primary ' onClick={() => this.setState({ counter: 0 })}>Reset</button>

        <hr /> <br />
        <button className='btn btn-info' onClick={() => this.setState({ isimage: false })}>Hide</button>
        <button className='btn btn-success' onClick={() => this.setState({ isimage: true })}>Show</button>
        <button className='btn btn-primary' onClick={()=>this.setState({isimage : !this.state.isimage})}>Toggle</button>

        {
          (this.state.isimage) ? <ImageData /> : false
        }

      </div>
    )
  }
}

export default ClassState