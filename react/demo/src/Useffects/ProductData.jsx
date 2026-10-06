import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ProductData() {

    const [data, setdata] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        try {
            const res = await axios.get("https://dummyjson.com/products")
            console.log(res.data.products)
            setdata(res.data.products)
        } catch (error) {
            console.log("Api data not Found")
        }
    }

    return (
        <div className='container'>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    data && data.map((pro,index) => {
                        // console.log(pro)
                        return (
                            <div className="col" key={index}>
                                <div className="card">
                                    <img style={{width:"300px",height:"300px"}} src={pro.images[0]} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{pro.id}</h5>
                                        <h5 className="card-title">{pro.title}</h5>
                                        <h3>{pro.price} $</h3>
                                        <p className="card-text">{pro.description.slice(0,100)}...</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductData