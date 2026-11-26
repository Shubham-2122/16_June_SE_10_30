import React from 'react'
import UserData from './Pages/UserData'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserForm from './Pages/UserForm'
import AdminManage from './Pages/AdminManage'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserData />} />
          <Route path='/adduser' element={<UserForm />} />
          <Route path='/admin' element={<AdminManage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
