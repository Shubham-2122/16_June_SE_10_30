import React, { useState } from 'react'
import ImageData from './ImageData'

function FuncObj() {

    const [data, setdata] = useState({
        name: "het",
        count: 0,
        Isimage: true
    })

    console.log(data)

    return (
        <div>
            <h1>{data.name}</h1>
            <button onClick={() => setdata({ ...data, name: "harshil" })}>Chanage Name</button>
            <button onClick={() => setdata({ ...data, name: "varj" })}>Chanage Name 2</button>

            <h1>{data.count}</h1>
            <button onClick={() => setdata({ ...data, count: data.count + 1 })}>Increment</button>
            <button onClick={() => setdata({ ...data, count: data.count - 1 })}>Decrement</button>
            <button onClick={() => setdata({ ...data, count: 0 })}>Reset</button>
            <hr /> 
            <br />
            <button onClick={()=>setdata({...data,Isimage : false})}>Hide</button>
             <button onClick={()=>setdata({...data,Isimage : true})}>Show</button>
              <button onClick={()=>setdata({...data,Isimage :!data.Isimage})}>Toggle</button>

            {
                (data.Isimage) ? <ImageData /> : false
            }

        </div>
    )
}

export default FuncObj