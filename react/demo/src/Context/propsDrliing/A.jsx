import React, { useState } from 'react'
import B from './B'

function A() {

    const [name,setname] = useState("roshan")

  return (
    <div>
        <h1>A Name : {name}</h1>
        <B name={name} setname={setname} />
    </div>
  )
}

export default A