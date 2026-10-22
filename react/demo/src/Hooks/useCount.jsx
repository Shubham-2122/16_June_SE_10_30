// custom hook create hoy use keyword 
// use kayword your name

import React, { useState } from 'react'

function useCount(num) {
    const [counter,setcounter] = useState(num)

    const increment =()=>{
        setcounter(counter+1)
    }
    const decrement =()=>{
        setcounter(counter - 1)
    }
    const reset =()=>{
        setcounter(1)
    }

    return {increment,decrement,reset,counter}
}

export default useCount