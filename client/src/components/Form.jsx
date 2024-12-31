import React, { useState } from 'react'


export default function Form({ type, sendDataToParent }) {


    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (e) =>{
        const {name, value} = e.target

        setFormData((pre)=>({
            ...pre,
            [name]: value
        }));
    }

    const handleSubmit = (e) =>{

        e.preventDefault()

        sendDataToParent(formData)

    }


  return (

    <div className="form_wrapper">
        <form onSubmit={handleSubmit}>
            {type === "signUp" && (
                <input type="text" name='username' placeholder='username' onChange={handleChange}/>
            )}
            <input type='email' name='email' placeholder='email' onChange={handleChange}/>
            <input type="password" name='password' placeholder='password' onChange={handleChange}/>
            {type === "signUp" && (
                <input type="password" name='confirmPassword' placeholder='repeat password' onChange={handleChange} />
            )}
            <button type='submit'> {type === "signUp" ? "Sign Up" : "Log In"}</button>
        </form>
    </div>
  )
}
