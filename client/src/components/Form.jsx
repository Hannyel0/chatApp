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

    <div className="h-[60vh] flex items-center justify-center flex-col">
        <h1 className="font-bold text-4xl mb-7">{type === "login" ? "Login" : "Sign Up"}</h1>
        <form className=' rounded-xl p-9 bg-surface-a10 flex flex-col items-center justify-center' onSubmit={handleSubmit}>
            {type === "signUp" && (
                <Input type="text" name="username" onChange={handleChange}/>
            )}
            <Input type="email" name="email" onChange={handleChange}/>
            <Input type="password" name="password" onChange={handleChange}/>
            {type === "signUp" && (
                <Input type="password" name="confirmPassword" onChange={handleChange}/>
            )}
            <button className=' rounded-lg bg-primary-a30 hover:bg-primary-a20 py-3 px-6 font-extrabold mt-1' type='submit'> {type === "signUp" ? "Sign Up" : "Log In"}</button>
        </form>
    </div>
  )


}

function Input({type, name, onChange}){

    return(
        <input className='p-2.5 text-white placeholder:text-surface-a50 rounded-lg outline-none mb-7 bg-surface-a20' type={type} name={name} placeholder={name} onChange={onChange}/>
    )
}

