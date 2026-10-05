// State  : it's simple type of varible
// state : same compoennt use
// state we can change possible 
// state : Hook useState
// state : const [defined,setdefined] = useState()
// State : reuse,reduce : import useState

import React, { useState } from 'react'
import ImageData from './ImageData'


function FunState() {

    // type [defined,setdefind] = useState(value)
    const [name, setname] = useState("roshan")
    const [count, setcount] = useState(1)
    const [isImage, setisImage] = useState(true)

    console.log(name)

    const inrecement=()=>{
        setcount(count+2)
    }

    return (
        <div>
            <h1>Hello function State</h1>
            <h1>Name : {name}</h1>
            <button onClick={() => setname("saurin")}>Change name</button>
            <button onClick={() => setname("rajveer")}>Change name</button>

            <h1>Counter : {count}</h1>
            <button onClick={() => setcount(count + 1)}>Increment</button>
            <button onClick={inrecement}>Increment by 2</button>
            <button onClick={() => setcount(count - 1)}>Decrement</button>
            <button onClick={() => setcount(0)}>Reset</button>

            <hr />
            <br />
            <button onClick={()=>setisImage(false)}>Hide</button>
            <button onClick={()=>setisImage(true)}>Show</button>
            <button onClick={()=>setisImage(!isImage)}>Toggle</button>
            {
                (isImage) ? <ImageData /> : false
            }
        </div>
    )
}

export default FunState