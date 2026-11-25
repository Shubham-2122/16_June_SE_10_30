import React from 'react'
import UserData from './Pages/UserData'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserData />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
