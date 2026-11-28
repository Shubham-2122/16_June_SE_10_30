import React from 'react'
import UserData from './Pages/UserData'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserForm from './Pages/UserForm'
import AdminManage from './Pages/AdminManage'
import EditTestUser from './Pages/EditTestUser'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserData />} />
          <Route path='/adduser' element={<UserForm />} />
          <Route path='/admin' element={<AdminManage />} />
          <Route path='/edit/:id' element={<EditTestUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
