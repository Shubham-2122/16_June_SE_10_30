import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UserTest() {

    const [data, setdata] = useState([])

    useEffect(() => {
        fetchuser()
    }, [])

    const fetchuser = async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users")
            console.log(res.data)
            setdata(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className="container">
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">City</th>
                            <th scope="col">Company Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.map((user) => {
                                // console.log(user)
                                return (
                                    <tr key={user.id}>
                                        <th scope="row">{user.id}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.address.city}</td>
                                        <td>{user.company.name}</td>
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

export default UserTest