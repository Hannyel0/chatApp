import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'



export default function ProtectedRoute({children}) {

    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()


    useEffect(()=>{

        const checkAuth = async ()=>{

            try{
                
                await axios.get("http://localhost:3939/auth/auth", {
                    withCredentials: true,
                })
    
    
                setIsAuthenticated(true)
            }catch(err){
                setIsAuthenticated(false)
                console.log("error authenticating and fetching the User", err)
            }finally{
                setLoading(false)
            }

        }

        checkAuth()

    },[])


    useEffect(()=>{
        if (isAuthenticated === false) {
            navigate('/login')
        }
    },[isAuthenticated])


    if(loading){
        return (
        <div className='h-screen flex justify-center items-center font-bold text-2xl'>Loading</div>)
    }

    if (!isAuthenticated) {
        return null
    }
    

    return children
    

}
