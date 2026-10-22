// usereff : it re-render sto method 
// usereff : real dom work 
// input events base use

import React, { useRef } from 'react'
import Headers from '../layout/Comana/Headers'
import useApi from './useApi'

function UseTest() {

    const refelement = useRef()

    const getchange=()=>{
        refelement.current.focus()
        console.log("hello")
    }

    const getColor = ()=>{
        refelement.current.style.background = "red";
        refelement.current.style.color = "white"
    }

    const {data} = useApi("https://dummyjson.com/products")

    console.log(data.products)

  return (
    <div>
        <Headers />

        <h1>Hello this UseRef data</h1>

        <input ref={refelement} type="text" placeholder='Enter Name' name="" id="" />
        <button onClick={getchange}>click me</button>

        <button onClick={getColor}>Chnage color</button>
    </div>
  )
}

export default UseTest