import React, { useEffect } from 'react'
import Aheads from '../AComan/Aheads'
import Aheros from '../AComan/Aheros'
import useApi from '../../Customdata/useApi'

function MenuManage() {

    const {data,setdata,fetchdata} = useApi("http://localhost:3000/menus")
    useEffect(()=>{
        fetchdata()
    },[])
    // console.log(data)

  return (
    <div>
        <Aheads />
        <Aheros name="Menu Manage" title="Menu Mange" />
        <div className="container">
            <table className="table table-dark">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#id</th>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">type</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.map((data) => {
                                // console.log(data)
                                return (
                                    <tr className='text-center' key={data.id}>
                                        <th scope="row">{data.id}</th>
                                        <td>
                                            <img src={data.img} style={{ width: "60px", height: "60px", borderRadius: "20px" }} alt="" />
                                        </td>
                                        <td>{data.name}</td>
                                        <td>{data.type}</td>
                                        <td>
                                            <button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#exampleModal">View</button>
                                            <button className='btn btn-success mx-2' >Edit</button>
                                            <button className='btn btn-danger' >Delete</button>
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

export default MenuManage