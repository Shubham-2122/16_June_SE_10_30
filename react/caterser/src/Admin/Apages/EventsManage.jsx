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
        console.log(res.data)
        setevent(res.data)
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
                                            <img src={data.img} style={{width:"60px",height:"60px",borderRadius:"20px"}} alt="" />
                                        </td>
                                        <td>{data.name}</td>
                                        <td>
                                            <button className='btn btn-info'>View</button>
                                            <button className='btn btn-success mx-2'>Edit</button>
                                            <button className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default EventsManage