import axios from 'axios';
import React, { useEffect, useState } from 'react'

 function FetchData() {
    const [data,setData]=useState([])
    useEffect(()=>{axios.get('http://localhost:8080/api/users')
.then(res=>setData(res.data))
.catch(err=>console.log(err));
},[])
  return (
    <div>
    <h1 className="text-center">users list</h1>
<table className="table table-sriped">
    <thead>
        <tr>
            <td>User Id</td>
            <td>User FirstName</td>
            <td>User LastName</td>
            <td>User Email</td>
        </tr>
    </thead>
    <tbody>
        {
            data.map(
                user=>
                    <tr key ={user.id}>
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                    </tr>
            )
        }
    </tbody>
</table>
</div>)
}
  

export default FetchData