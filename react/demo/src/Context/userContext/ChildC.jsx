import React, { useContext } from 'react'
import { test } from './ChildA'

function ChildC() {

    const {data,setdata} = useContext(test)

  return (
    <div>
            <h1>Counter : {data.count}</h1>
            <button onClick={()=>setdata({...data,count:data.count + 1})}>increment</button>
    </div>
  )
}

export default ChildC