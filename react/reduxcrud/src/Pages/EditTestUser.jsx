import React, { useEffect, useState } from 'react'
import Header from '../Comane/Header'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { edituser } from '../Slice/userSlice'

function EditTestUser() {

    const {id} = useParams()
    console.log(id)

    const redirect = useNavigate()
    const dispatch = useDispatch()

    const {users} = useSelector((state)=>state.users)
    console.log(users)

    const [editing,setediting] = useState({
          id:"",
        name:"",
        email:"",
        password:"",
        phone:""
    })

    useEffect(()=>{
        const singleuser = users.filter((data) => data.id === id)
        console.log(singleuser[0])
        setediting(singleuser[0])
    },[])

    const getchange=(e)=>{
        setediting({
            ...editing,
            [e.target.name]:e.target.value
        })
    }

    const getupdatete=(e)=>{
        e.preventDefault()

        dispatch(edituser(editing))
        setediting({
            id:"",
            name:"",
        email:"",
        password:"",
        phone:""
        })
        redirect("/")
        console.log("User Updated")
    }

  return (
    <div>
        <Header />
         <div className="container">
                <h1 className='text-center'>User Profile Edit</h1>
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <form onSubmit={getupdatete} >
                            
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input  name='name' value={editing.name} onChange={getchange} type="text" className="form-control" id="name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Phone" className="form-label">Phone</label>
                                <input type="tel"  name='phone' value={editing.phone} onChange={getchange} className="form-control" id="Phone" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email"  name='email' value={editing.email} onChange={getchange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input  type="password" name='password' value={editing.password} onChange={getchange} className="form-control" id="exampleInputPassword1" />
                            </div>
                            
                            <button type="submit" className="btn btn-primary">Update user</button>
                        </form>

                    </div>
                </div>
            </div>
    </div>
  )
}

export default EditTestUser