// UseEffect : function Side effect 
// APi call ,componenent side effect
// function logic , second parameter : ,optional

import React, { useEffect, useState } from 'react'

function Effectdata() {
    
    // 1) empty 
    // useEffect(()=>{
    //     console.log("outside call")
    //     return(()=>{
    //         console.log("inside call")
    //     })
    // })

    // 2) blank array : Api  
    //  useEffect(()=>{
    //     console.log("outside call")
    //     return(()=>{
    //         console.log("inside call")
    //     })
    // },[])

    const [name,setname] = useState("Het")

    // 3) state : Api
     useEffect(()=>{
        console.log("outside call")
        return(()=>{
            console.log("inside call")
        })
    },[name])

    return (
    <div>
        <h1>{name}</h1>
        <button onClick={()=>setname("roshan")}>Chnage name</button>
    </div>
  )
}

export default Effectdata