import React, { useEffect, useState } from 'react'
import Aheads from '../AComan/Aheads'
import Aheros from '../AComan/Aheros'
import axios from 'axios'
import { toast } from 'react-toastify'

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
            // console.log(res.data)
            setpro(res.data)
        } catch (error) {
            console.log("api not Found", error)
        }
    }

    const deleteporudct = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:3000/events/${id}`)
            // console.log(res.data)
            // console.log("delete product successfully")
            toast.success("Delete Product Successfully")
            fetchdata()
        } catch (error) {
            console.log(error)
            toast.error("Api Data not Found")
        }
    }
    //  edit data  : model open ,closed    
    const [edit, setedit] = useState(null)
    // data change 
    const [edited, setedited] = useState({
        id: "",
        name: "",
        img: ""
    })

    const getdata = (data) => {
        console.log(data)
        setedit(data)
        setedited(data)
    }

    // from handling
    const getchange = (e) => {
        setedited({
            ...edited,
            [e.target.name]: e.target.value
        })
    }

    const getupdate = async (e) => {
        e.preventDefault()

        if (edited.img == "" || edited.img == "") {
            toast.error("Pls Field data first")
            return false
        }
        try {

            const res = await axios.put(`http://localhost:3000/events/${edited.id}`, edited)
            console.log(res.data)
            toast.success("Update data successfully")
            fetchdata()
            setedit(null)
            setedited({
                id: "",
                name: "",
                img: ""
            })

        } catch (error) {
            toast.error("Api data not Found")
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
                                            <button className='btn btn-success mx-2' onClick={() => getdata(data)}>Edit</button>
                                            <button className='btn btn-danger' onClick={() => deleteporudct(data.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>

                {
                    edit && (
                        <div className="container-fluid contact py-6 wow bounceInUp" data-wow-delay="0.1s">
                            <div className="container">
                                <div className="p-5 bg-light rounded contact-form">
                                    <div className="row g-4">
                                        <div className="col-12">

                                            <h1 className="display-5 text-center mb-0">Events Updates Form</h1>
                                        </div>
                                        <div className="col-md-6 mx-auto col-lg-7">

                                            <form >


                                                <select name='name' onChange={getchange} value={edited.name} className="form-select w-100 form-control p-3 mb-4 border-primary bg-light" aria-label="Default select example">
                                                    <option disabled>Select Events</option>
                                                    <option value="Wedding">Wedding</option>
                                                    <option value="Corporate">Corporate</option>
                                                    <option value="Cocktail">Cocktail</option>
                                                </select>

                                                <input name='img' onChange={getchange} value={edited.img} type="url" className="w-100 form-control p-3 mb-4 border-primary bg-light" placeholder="Events imge url" />

                                                <div className="row">
                                                    <div className="col-6"><button onClick={getupdate} className="w-100 btn btn-primary form-control p-3 border-primary bg-primary rounded-pill" type="submit">Update</button>
                                                    </div>
                                                    <div className="col-6"><button onClick={() => setedit(null)} className="w-100 btn btn-primary form-control p-3 border-primary bg-primary rounded-pill" type="submit">cancle</button></div>
                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

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