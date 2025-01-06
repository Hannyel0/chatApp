import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext'


export default function ProfileCard({userData}) {

  const {logOut} = useUser()


  const handleLogOut = ()=>{

    logOut()
  }




  return (

    <section className='p-5 bg-surface-a10 rounded-lg min-w-[18vw]'>
        <div className='flex items-center space-x-5'>
            <div className='w-20 h-20 '>
                <img src={userData.profilePicture} alt="user" className=' h-auto rounded-full border border-surface-a30 shadow-sm hover:scale-110 transition-all' />
            </div>
            <div>
                <h3 className='text-xl font-bold'>{userData.name}</h3>
                <p className='text-sm font-light'>{userData.email}</p>
            </div>
            
        </div>
        <div className='flex justify-between items-center'>
        
        <Link className='h-full' to="/chat"><button className='rounded-lg bg-primary-a30 hover:bg-primary-a20 py-1 px-4 font-bold mt-4 '>Chat</button></Link>
        <button className='rounded-lg bg-none border-2 border-red-600 py-1 px-4 font-bold mt-4' onClick={handleLogOut}>Log Out</button>
        </div>
    </section>

  )

}
