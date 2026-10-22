import axios from 'axios'
import React, { useEffect, useState } from 'react'

function useApi(api) {

    const [data,setdata] = useState([])

    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata=async()=>{
        try {
            const res = await axios.get(api)
            setdata(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    return {data}

}

export default useApi