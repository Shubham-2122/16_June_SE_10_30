import React, { useState } from 'react'

function FormObje() {

    const [data, setdata] = useState({
        name: "",
        surname: "",
        phone: "",
        email: "",
        password: ""
    })

    console.log(data)

    const getchange=(e)=>{
        setdata({
            ...data,
            // name = value
            [e.target.name] : e.target.value
        })
    }


    return (
        <div>
            <div className="container">
                <h1>Form object state data</h1>
                {/* <div className="row">
                    <div className="col-md-6 mx-auto">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Enter your Name</label>
                                <input type="text" value={data.name} onChange={(e) => setdata({ ...data, name: e.target.value })} className="form-control" id="name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="srname" className="form-label">Enter your surname</label>
                                <input type="text" value={data.surname} onChange={(e) => setdata({ ...data, surname: e.target.value })} className="form-control" id="srname" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" value={data.email} onChange={(e) => setdata({ ...data, email: e.target.value })} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="ph" className="form-label">Enter your Phone</label>
                                <input type="tel" value={data.phone} onChange={(e) => setdata({ ...data, phone: e.target.value })} className="form-control" id="ph" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" value={data.password} onChange={(e) => setdata({ ...data, password: e.target.value })} className="form-control" id="exampleInputPassword1" />
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div> */}
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Enter your Name</label>
                                <input type="text" value={data.name} onChange={getchange} name='name' className="form-control" id="name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="srname" className="form-label">Enter your surname</label>
                                <input type="text" value={data.surname} onChange={getchange} name='surname' className="form-control" id="srname" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" value={data.email} onChange={getchange} name='email'  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="ph" className="form-label">Enter your Phone</label>
                                <input type="tel" value={data.phone} onChange={getchange} name='phone' className="form-control" id="ph" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" value={data.password} onChange={getchange} name='password'  className="form-control" id="exampleInputPassword1" />
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormObje