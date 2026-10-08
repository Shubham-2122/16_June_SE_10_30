import React from 'react'

function D({name,setname}) {
  return (
    <div>
        <h1>D name : {name}</h1>

        <button className='btn btn-info' onClick={()=>setname("divya")}>Chaneg name</button>
    </div>
  )
}

export default D