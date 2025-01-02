import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function Form({ type }) {


    const navigate = useNavigate()

    const [error, setError] = useState(null)


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

        setError('')
    }

    const handleSubmit = async (e) =>{

        e.preventDefault()

        try{

            const url = type === "login" ? "http://localhost:3939/login" : "http://localhost:3939/signup"

            const response = await axios.post(url, formData, {
                withCredentials: true
            })

            console.log(response)

            if(type=== "login"){
                navigate('/profile')
            }

            if(type=== "signUp"){
                navigate('/login')
            }

        }catch(err){
            console.log("Error: ", err.response.data.message, err.response.data.error)

            setError(err.response.data.message)
        }





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
            {error && (
                <div className={` p-2.5 text-white mb-4 bg-red-500 rounded-lg transform ${error ? `scale-100 opacity-100`: `scale-0 opacity-0` } break-words max-w-md transition-all duration-400 ease-in-out `}>{error}</div>
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

