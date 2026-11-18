import React, { useState } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {

    const redirect = useNavigate()

    const [newuser, setnewuser] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        status:""
    })

    const getchange = (e) => {
        setnewuser({
            ...newuser,
            id: new Date().getTime().toString(),
            status : "unblock",
            [e.target.name]: e.target.value
        })
    }

    const getsubmit = async (e) => {
        e.preventDefault()

        if (newuser.email == "" || newuser.name == "" || newuser.password == "") {
            toast.error("all filed are required")
            return false
        }

        try {
            const res = await axios.post("http://localhost:3000/users", newuser)
            setnewuser({
                id: "",
                name: "",
                email: "",
                password: ""
            })
            redirect("/login")
            toast.success("register data Successfully")

        } catch (error) {
            toast.error("Api data not Found")
        }
    }

    return (
        <div>

            <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
                <div className='mask gradient-custom-3'></div>
                <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
                    <MDBCardBody className='px-5'>
                        <form action="" onSubmit={getsubmit}>
                            <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                            <MDBInput wrapperClass='mb-4' value={newuser.name} onChange={getchange} name='name' label='Your Name' size='lg' id='form1' type='text' />
                            <MDBInput wrapperClass='mb-4' value={newuser.email} onChange={getchange} name='email' label='Your Email' size='lg' id='form2' type='email' />
                            <MDBInput wrapperClass='mb-4' value={newuser.password} onChange={getchange} name='password' label='Password' size='lg' id='form3' type='password' />

                            <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
                        </form>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        </div>
    )
}

export default Register