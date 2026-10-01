// Props : it's Property 
// props : as a pramater 
// props : one component to another component data pass 
// props : are readyly , unmutable 
// props : name it change data

import React from 'react'

function FuncProps({title,desc,img}) {
  return (
    <div className='col-md-4'>
          <div className="card" style={{ width: '18rem' }}>
              <img src={img} className="card-img-top" alt="..." />
              <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{desc}</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
          </div>

    </div>
  )
}

export default FuncProps