import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import ProfileCard from "../components/ProfileCard"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

export default function Profile() {

  const navigate = useNavigate()

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)


  useEffect(()=>{
    
    const fetchUserData = async()=>{

      try{

        const response = await axios.get("http://localhost:3939/profile", {
          withCredentials: true, // Ensures cookies are sent
        });

        setUser(response.data.user)
        setLoading(false)

      }catch(err){
        console.log("Error fetching the Data for the user",err.message)

        if(err.response && err.response.status === 401){
          navigate("/login")
        }else{
          setLoading(false)
        }
      }
    }

    fetchUserData()
  },[navigate])


  if (loading) {
    return <div className="h-screen flex justify-center items-center font-bold text-5xl">Loading...</div>;
}



  return (

    <>
    <Navbar/>

    <main className="flex justify-center items-center m-7">

    <ProfileCard userData={user}/>

    </main>
    
    </>
  )
}
