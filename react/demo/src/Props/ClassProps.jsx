// Props : it's Property 
// props : as a pramater 
// props : one component to another component data pass 
// props : are readyly , unmutable 
// props : name it change data
//Props : class and function 
// class : contro ,super , this keyword

import React, { Component } from 'react'

class ClassProps extends Component {
    constructor(props) {
        super(props)
        this.data = props
    }
    render() {
        return (
            <div className='col-md-4'>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={this.data.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.data.title}</h5>
                        <p className="card-text">{this.data.desc}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ClassProps