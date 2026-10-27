import React, { useState } from 'react'
import Aheros from '../AComan/Aheros'
import Aheads from '../AComan/Aheads'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function EventsAdd() {

    const redirect = useNavigate()

    const [form,setform] = useState({
        id:"",
        name:"",
        img:""
    })

    const getchange=(e)=>{
        setform({
            ...form,
            id : new Date().getTime().toString(),
            [e.target.name]:e.target.value
        })
    }

    const getsubmit=async(e)=>{
        e.preventDefault() 
        //  prevent : events default without refresh data pass

        if(form.img == "" || form.name == ""){
            console.log("pls data field first")
            return false
        }

        try {
            const res = await axios.post("http://localhost:3000/events",form)
            console.log(res.data)
            console.log("Succesfull data add")
            redirect("/eventmange")
        } catch (error) {
            console.log("Api not Found",error)
        }
    }

    console.log(form)
  return (
    <div>
        <Aheads />
        <Aheros title="Events Add" name="Events Add" />
         <div className="container-fluid contact py-6 wow bounceInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="p-5 bg-light rounded contact-form">
                        <div className="row g-4">
                            <div className="col-12">
                                
                                <h1 className="display-5 text-center mb-0">Events Add Form</h1>
                            </div>
                            <div className="col-md-6 mx-auto col-lg-7">
                               
                                <form onSubmit={getsubmit}>

                                    
                                        <select value={form.name} name='name' onChange={getchange} className="form-select w-100 form-control p-3 mb-4 border-primary bg-light" aria-label="Default select example">
                                            <option disabled>Select Events</option>
                                            <option value="Wedding">Wedding</option>
                                            <option value="Corporate">Corporate</option>
                                            <option value="Cocktail">Cocktail</option>
                                        </select>
                                   
                                    <input value={form.img} name='img' onChange={getchange} type="url" className="w-100 form-control p-3 mb-4 border-primary bg-light" placeholder="Events imge url" />
                                   
                                    <button className="w-100 btn btn-primary form-control p-3 border-primary bg-primary rounded-pill" type="submit">Events Add</button>
                                </form>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default EventsAdd