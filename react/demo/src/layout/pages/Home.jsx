import React from 'react'
import Headers from '../Comana/Headers'
import Footer from '../Comana/Footer'

function Home() {
  return (
    <div>
        <Headers />
        <h1 className='bg-info p-5'>Hello this Home page</h1>
        <Footer />
    </div>
  )
}

export default Home