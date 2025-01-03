import Navbar from "../components/Navbar"
import ProfileCard from "../components/ProfileCard"

export default function Profile({user}) {


  return (

    <>
    <Navbar/>

    <main className="flex justify-center items-center m-7">

    <ProfileCard userData={user}/>

    </main>
    
    </>
  )
}
