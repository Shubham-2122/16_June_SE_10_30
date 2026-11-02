import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

function useApi(api) {
  
    const [data,setdata] = useState([])

    const fetchdata=async()=>{
        try {
            const res = await axios.get(api)
            console.log(res.data)
            setdata(res.data)
        } catch (error) {
            console.log("error")
            toast.error("Api not Found")
        }
    }

    return {data,setdata,fetchdata}
}

export default useApi