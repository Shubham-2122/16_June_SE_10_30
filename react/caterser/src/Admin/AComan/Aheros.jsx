import React from 'react'

function Aheros({title,name}) {
  return (
    <div>
         <div className="container-fluid bg-light py-3 my-3 mt-0">
                <div className="container text-center animated bounceInDown">
                    <h1 className="display-1 mb-4">{title}</h1>
                    <ol className="breadcrumb justify-content-center mb-0 animated bounceInDown">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="breadcrumb-item text-dark" aria-current="page">{name}</li>
                    </ol>
                </div>
            </div>
    </div>
  )
}

export default Aheros