import React, { createContext, useState } from 'react'
import ChildD from './ChildD'
import ChildB from './ChildB'
import ChildC from './ChildC'

export const test = createContext()

function ChildA() {

    const [name,setname] = useState("het")
    const [data,setdata] = useState({
        count : 0
    })

  return (
    <div>

        {/* 1) create context
            2) provide : data pass
            3) useContext : data access
        */}

        <test.Provider value={{name,setname,data,setdata}}>
            <ChildB />
            <ChildC />
            <ChildD />
        </test.Provider>
    </div>
  )
}

export default ChildA