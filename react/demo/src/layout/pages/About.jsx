import React from 'react'
import Headers from '../Comana/Headers'
import Footer from '../Comana/Footer'
import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
        <Headers />
        <h1 className='bg-success p-5'>Hello this About page</h1>

        <Link className='btn btn-dark' to="/about/about1">About 1</Link>
        <Link className='btn btn-dark' to="/about/about2" >About 2</Link>

        <Outlet />
        <Footer />
    </div>
  )
}

export default About