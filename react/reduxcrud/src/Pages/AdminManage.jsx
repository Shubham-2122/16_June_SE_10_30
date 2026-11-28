import React, { useEffect } from 'react'
import Header from '../Comane/Header'
import { useDispatch, useSelector } from 'react-redux'
import { adminread } from '../Slice/adminSlice'

function AdminManage() {

    const { loading, admins } = useSelector((state) => state.admins)

    // console.log(loading)
    // console.log(users)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(adminread())
    }, [])

    return (
        <div>
            <Header />
            <div className="container">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th scope="col">#id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            admins && admins.map((data) => {
                                console.log(data)
                                return (
                                    <tr>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>
                                            <button className='btn btn-info'>View</button>
                                            <button className='btn btn-success mx-2'>Edit</button>
                                            <button className='btn btn-danger'>delete</button>
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

export default AdminManage