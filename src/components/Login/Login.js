

import React, { useState } from 'react'
import './login.css'

function Signup() {
    const [formData,setFormData]=useState({
        firstName : '',
        lastName : '',
        email : '',
        passwords : ''
    })

    const handleInputChange = (event) => {
        const {name,value} = event.target
        setFormData((prevData)=>({...prevData,[name]:value}))
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        console.log(formData,"The input is")
    }

  return (
    <div className='sign-up-container'>
    <div className='signup-card'>
<h1>Registration Form</h1>
<form onSubmit={handleSubmit}>
    <label>First name</label>
    <input type="text" placeholder='First name' name="firstName" value={formData.firstName} onChange={(event) => handleInputChange(event)}/>
    <label>Last name</label>
    <input type="text" placeholder='Last name' name="lastName" value={formData.lastName} onChange={(event) => handleInputChange(event)}/>
    <label>Email</label>
    <input type="email" placeholder='Email' name="email" value={formData.email} onChange={(event) => handleInputChange(event)}/>
    <label>password</label>
    <input type="password" placeholder='Password' name="passwords" value={formData.passwords} onChange={(event) => handleInputChange(event)}/>
    <button type='submit'>sign Up</button>
</form>
    </div>
    </div>
  )
}

export default Signup