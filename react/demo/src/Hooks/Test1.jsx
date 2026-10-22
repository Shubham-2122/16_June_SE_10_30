import React from 'react'
import Headers from '../layout/Comana/Headers'
import useCount from './useCount'
import useApi from './useApi'

function Test1() {

    const {counter,increment,reset} = useCount(1)

    const {data} = useApi("https://jsonplaceholder.typicode.com/users")

    

    console.log(data)

  return (
    <div>
        <Headers />

        <h1>Counter : {counter}</h1>

        <button onClick={increment}>Increment</button>

        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Test1