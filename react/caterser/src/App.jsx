import React from 'react'
import { Slide, ToastContainer, toast } from 'react-toastify';
import Home from './Wesbite/Pages/Home'
import About from './Wesbite/Pages/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Service from './Wesbite/Pages/Service'
import Events from './Wesbite/Pages/Events'
import Menus from './Wesbite/Pages/Menus'
import Book from './Wesbite/Pages/Book'
import Blogs from './Wesbite/Pages/Blogs'
import Team from './Wesbite/Pages/Team'
import Test from './Wesbite/Pages/Test'
import Contact from './Wesbite/Pages/Contact'
import NotFound from './Wesbite/Pages/NotFound'
import Dashboard from './Admin/Apages/Dashboard'
import EventsManage from './Admin/Apages/EventsManage'
import EventsAdd from './Admin/Apages/EventsAdd'


function App() {
  return (
    <BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
      <Routes>
        {/* wesbite */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/events' element={<Events />} />
        <Route path='/menu' element={<Menus />} />
        <Route path='/book' element={<Book />} />
        <Route path='/blog' element={<Blogs />} />
        <Route path='/team' element={<Team />} />
        <Route path='/test' element={<Test />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='*' element={<NotFound />} />

        {/* admin */}
        <Route path='/dash' element={<Dashboard />} />
        <Route path='/eventmange' element={<EventsManage />} />
        <Route path='/eventadd' element={<EventsAdd />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App