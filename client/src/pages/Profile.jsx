import Navbar from "../components/Navbar"
import ProfileCard from "../components/ProfileCard"
import { useUser } from "../context/UserContext"



export default function Profile() {

  const user = useUser()


  if(!user){
    return <div className="h-screen flex justify-center items-center font-bold text-4xl">Loading...</div>
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
