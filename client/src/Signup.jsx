import React, { useState } from 'react'
import axios from 'axios'

function Signup() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const handleSubmit =(e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/register' ,{name, email})
        .then(result => console.log(result))
        .catch(err=> console.log(err))

    }

    
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type='text' placeholder='enter name' name='name' onChange={(e) => setName(e.target.value)}/><br></br>
        <label>Email</label>
        <input type='text' placeholder='enter email' name='email' onChange={(e) => setEmail(e.target.value)}/><br></br>
        <button>Register now</button>
      </form>
    </div>
  )
}

export default Signup
