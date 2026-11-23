import React from 'react'
import CounterData from './features/counter/CounterData'
import TodoList from './features/todolist/TodoList'
import TodoTest from './features/todolist/TodoTest'

function App() {
  return (
    <div>
      <CounterData />
      <TodoTest />
      <TodoList />

    </div>
  )
}

export default App