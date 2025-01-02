import { Link } from 'react-router-dom'
import NoProfile from '../assets/no-user-profile.png'

export default function ProfileCard({userData}) {




  return (

    <section className='p-5 bg-surface-a10 rounded-lg'>
        <div className='flex items-center justify-center space-x-5'>
            <div className='w-20 h-20 '>
                <img src={NoProfile} alt="user" className='max-w-full h-auto rounded-full border border-surface-a30 shadow-sm hover:scale-110 transition-all trant' />
            </div>
            <div>
                <h3 className='text-xl font-bold'>{userData.name}</h3>
                <p className='text-sm font-light'>{userData.email}</p>
            </div>
            
        </div>
        <button className='rounded-lg bg-primary-a30 hover:bg-primary-a20 py-1 px-4 font-bold mt-4 ml-1'><Link to="/chat">Chat</Link></button>
    </section>

  )

}
