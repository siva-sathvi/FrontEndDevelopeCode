
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const [data,setData]=useState([])
  useEffect(()=>{axios.get('http://localhost:8080/api/users')
.then(res=>setData(res.data))
.catch(err=>console.log(err));
},[])
return (
  <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
  <h1 >users list</h1>
  <div className='w-75 rounded bg-white border shadow p-4'>
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
</table></div>
</div>)
}

export default Home