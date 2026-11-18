import React, { useEffect, useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

function Login() {


    const redirect = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem("Uid")){
            redirect("/")
        }
    },[])

    const [form, setform] = useState({
        email: "",
        password: ""
    })

    const getchange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    

    const getlogin = async (e) => {
        e.preventDefault()

        const { email, password } = form
        try {

            if (email == "" || password == "") {
                console.log("Pls Field this required")
                toast.error("Pls Field Reuqired data")
                return false
            }

            const res = await axios.get(`http://localhost:3000/users?email=${email}`)
            console.log(res.data)

            // email check
            if(res.data.length === 0){
                toast.error("Email does not match")
                return false
            }

            const admin = res.data[0]
            console.log(admin)
            // password 

            if(admin.password != password){
                toast.error("Password does not match")
                return false
            }

            // block codition

            if(admin.status == "block"){
                toast.error("Acoount Has been blocked")
                return false
            }

            localStorage.setItem("Uid",admin.id)
            localStorage.setItem("Uname",admin.name)
            toast.success("user login successfully")
            redirect("/")


        } catch (error) {
            toast.error("Api Data not Found")
        }


    }


  return (
    <div>
        <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>
<form action="">
    
              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 w-100' name='email' onChange={getchange} value={form.email}  label='Email address' id='formControlLg' type='email' size="lg"/>
              <MDBInput name='password' onChange={getchange} value={form.password}  wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg"/>

              <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

              <MDBBtn size='lg' onClick={getlogin}>
                Login
              </MDBBtn>

              <hr className="my-4" />
               <p className="mb-0">Don't have an account? <Link to="/new" class=" fw-bold">Sign Up</Link></p>

</form>
              

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
    </div>
  )
}

export default Login