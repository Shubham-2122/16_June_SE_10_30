import React, { useEffect, useState } from 'react'
import Aheads from '../AComan/Aheads'
import Aheros from '../AComan/Aheros'
import axios from 'axios'

function EventsManage() {

    const [event, setevent] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/events")
        // console.log(res.data)
        setevent(res.data)
    }

    const [pro, setpro] = useState({
        id: "",
        name: "",
        img: ""
    })

    // single product
    const singleproduct = async (id) => {
        try {
            const res = await axios.get(`http://localhost:3000/events/${id}`)
            console.log(res.data)
            setpro(res.data)
        } catch (error) {
            console.log("api not Found", error)
        }
    }

    const deleteporudct=async(id)=>{
        try {
            const res = await axios.delete(`http://localhost:3000/events/${id}`)
            console.log(res.data)
            console.log("delete product successfully")
            fetchdata()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Aheads />
            <Aheros title="Events Manage" name="Events Manage" />
            <div className="container">
                <table className="table table-dark">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#id</th>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            event && event.map((data) => {
                                // console.log(data)
                                return (
                                    <tr className='text-center' key={data.id}>
                                        <th scope="row">{data.id}</th>
                                        <td>
                                            <img src={data.img} style={{ width: "60px", height: "60px", borderRadius: "20px" }} alt="" />
                                        </td>
                                        <td>{data.name}</td>
                                        <td>
                                            <button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => singleproduct(data.id)}>View</button>
                                            <button className='btn btn-success mx-2'>Edit</button>
                                            <button className='btn btn-danger' onClick={()=>deleteporudct(data.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">{pro.name}</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <div className="col-md-12  " >
                                    <div className="event-img position-relative">
                                        <img className="img-fluid rounded w-100" src={pro.img} style={{ width: "300px", height: "250px" }} alt />
                                        <div className="event-overlay d-flex flex-column p-4">
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventsManage