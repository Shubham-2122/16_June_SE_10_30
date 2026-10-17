import React from 'react'
import Headers from '../Comana/Headers'
import Footer from '../Comana/Footer'

function About() {
  return (
    <div>
        <Headers />
        <h1 className='bg-success p-5'>Hello this About page</h1>

        <a href="">About 1</a>
        <a href="">About 2</a>
        <Footer />
    </div>
  )
}

export default About