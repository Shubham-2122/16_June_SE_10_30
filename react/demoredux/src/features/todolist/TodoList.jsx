import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from './todoSlice'

function TodoList() {
  
    const {todo} = useSelector((state)=>state.todos)

    // console.log(todo)

    const dispatch = useDispatch()

    return (
    <div>
        <h1>hello TodoList Show</h1>

        <ul>
            {
                todo && todo.map((data,index)=>{
                    return(
                        <li key={index}>{data} <button>Edit</button> <button onClick={()=>dispatch(deleteTodo(index))}>Delete</button></li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default TodoList