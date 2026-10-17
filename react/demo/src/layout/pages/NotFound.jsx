import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
        <h1 className='p-5 bg-danger text-light'>404 Not Found Pages</h1>
        <Link className='btn btn-success' to="/">Back to home</Link>
    </div>
  )
}

export default NotFound