import React from 'react'

function Borderdata() {
  return (
    <div>
        <h1 className='text-5xl border-2 border-amber-300'>Hello</h1>
        <h1 className='text-5xl  border-4 border-double rounded-3xl'>Hello</h1>
        <h1 className='text-5xl border-8 border-dashed'>Hello</h1>

        <h1 className='text-6xl bg-linear-to-r from-red-500 to-green-200'>Hekji</h1>
        <h1 className='text-6xl bg-linear-to-r from-red-500 via-blue-300 to-green-200'>Hekji</h1>
    </div>
  )
}

export default Borderdata