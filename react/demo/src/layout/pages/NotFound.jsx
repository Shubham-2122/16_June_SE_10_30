import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function NotFound() {

  const redirect = useNavigate()

  const getHome=()=>{
    redirect("/")
    console.log("Back data")
  }

  return (
    <div>
        <h1 className='p-5 bg-danger text-light'>404 Not Found Pages</h1>
        <Link className='btn btn-success' to="/">Back to home</Link>

      <button onClick={getHome} className='btn btn-info mx-2'>Back to Home 2</button>
    </div>
  )
}

export default NotFound