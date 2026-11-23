import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './todoSlice'

function TodoTest() {

    const [name,setname]= useState("")

    const dispatch = useDispatch()

    const getsubmit=(e)=>{
        e.preventDefault()

        dispatch(addTodo(name))
        setname("")
    }

  return (
    <div>
        <h1>Hello todo Add</h1>

        <form action="" onSubmit={getsubmit}>
            <input type="text" name="" value={name} onChange={(e)=>setname(e.target.value)} id="" placeholder='Enter your Name' />
            <input type="submit" value="add data" />
        </form>

    </div>
  )
}

export default TodoTest