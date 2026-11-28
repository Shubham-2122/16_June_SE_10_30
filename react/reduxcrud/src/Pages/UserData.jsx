import React, { useEffect } from 'react'
import Header from '../Comane/Header'
import { useDispatch, useSelector } from 'react-redux'
import { deleteuser, readData } from '../Slice/userSlice'
import { Link } from 'react-router-dom'

function UserData() {

    const { loading, users } = useSelector((state) => state.users)

    // console.log(loading)
    // console.log(users)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(readData())
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
                            users && users.map((data)=>{
                                // console.log(data)
                                return(
                                    <tr key={data.id}>
                            <th scope="row">{data.id}</th>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>
                                <button className='btn btn-info'>View</button>
                                <Link className='btn btn-success mx-2' to={`/edit/${data.id}`} >Edit</Link>
                                <button className='btn btn-danger' onClick={()=>dispatch(deleteuser(data.id))}>delete</button>
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

export default UserData