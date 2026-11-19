import React, { useEffect, useState } from 'react'
import Header from '../Coman/Header'
import Footer from '../Coman/Footer'
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

function EditProfile() {

    const redirect = useNavigate()

    const [form, setform] = useState({
        id: "",
        name: "",
        email: "",
        password: ""
    })

    useEffect(() => {
        fetchuser()
    }, [])

    const fetchuser = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/users/${localStorage.getItem("Uid")}`)
            console.log(res.data)
            setform(res.data)
        } catch (error) {
            toast.error("Api Data not Found")
        }
    }

    const getchange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const getupdate = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.put(`http://localhost:3000/users/${form.id}`, form)
            console.log(res.data)
            setform({
                id: "",
                name: "",
                email: "",
                password: ""
            })
            localStorage.setItem("Uname",res.data.name)
            redirect("/")
            toast.success("Profile has been Updated")
        } catch (error) {
            toast.error("Api data not Found")
        }
    }

    return (
        <div>
            <Header />
            <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' >
                <div className='mask gradient-custom-3'></div>
                <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
                    <MDBCardBody className='px-5'>
                        <form action="" onSubmit={getupdate}>
                            <h2 className="text-uppercase text-center mb-5">Edit Profile</h2>
                            <MDBInput wrapperClass='mb-4' value={form.name} onChange={getchange} name='name' label='Your Name' size='lg' id='form1' type='text' />
                            <MDBInput wrapperClass='mb-4' value={form.email} onChange={getchange} name='email' label='Your Email' size='lg' id='form2' type='email' />
                            <MDBInput wrapperClass='mb-4' value={form.password} onChange={getchange} name='password' label='Password' size='lg' id='form3' type='password' />

                            <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Edit profile</MDBBtn>
                        </form>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
            <Footer />
        </div>
    )
}

export default EditProfile