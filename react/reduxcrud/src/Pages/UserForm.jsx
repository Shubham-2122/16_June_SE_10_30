import React, { useState } from 'react'
import Header from '../Comane/Header'
import { useDispatch } from 'react-redux'
import { createUser } from '../Slice/userSlice'
import { useNavigate } from 'react-router-dom'

function UserForm() {

    const [form,setform]=useState({
        id:"",
        name:"",
        email:"",
        password:"",
        phone:""
    })

    const getchnage=(e)=>{
        setform({
            ...form,
            id:new Date().getTime().toString(),
            [e.target.name]:e.target.value
        })
    }

    const redirect = useNavigate()

    const dispatch = useDispatch()

    const getsubmit=async(e)=>{
        e.preventDefault()

        if(form.email == "" || form.name == "" || form.password == "" || form.phone == ""){
            console.log("pls Field data")
            return false
        }

        dispatch(createUser(form))
        setform({
            id:"",
        name:"",
        email:"",
        password:"",
        phone:""
        })
        redirect("/")
        console.log("succfully add")
    
    }

    return (
        <div>
            <Header />
            <div className="container">
                <h1 className='text-center'>User Add form</h1>
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <form onSubmit={getsubmit}>
                            
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input value={form.name} onChange={getchnage} name='name' type="text" className="form-control" id="name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Phone" className="form-label">Phone</label>
                                <input type="tel" value={form.phone} onChange={getchnage} name='phone' className="form-control" id="Phone" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" value={form.email} onChange={getchnage} name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input value={form.password} type="password" onChange={getchnage} name='password' className="form-control" id="exampleInputPassword1" />
                            </div>
                            
                            <button type="submit" className="btn btn-primary">Add user</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserForm