import React, { useContext } from 'react'
import { test } from './ChildA'

function ChildD() {

    const {name,setname} = useContext(test)

  return (
    <div>
        <h1>D Name : {name} </h1>
        <button onClick={()=>setname("jay")}>Chnge name </button>
    </div>
  )
}

export default ChildD