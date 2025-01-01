import React from 'react'
import NoProfile from '../assets/3da39-no-user-image-icon-27.png'

export default function ProfileCard() {




  return (

    <section className='p-5 bg-surface-a10 rounded-lg'>
        <div className='flex items-center justify-center space-x-5'>
            <div className='w-20 h-20 '>
                <img src={NoProfile} alt="user" className='max-w-full h-auto rounded-full border border-surface-a30 shadow-sm hover:scale-110 transition-all trant' />
            </div>
            <div>
                <h3 className='text-xl font-bold'>Jhon Doe</h3>
                <p className='text-sm font-light'>jhonDoe@gmail.com</p>
            </div>
            
        </div>
        <button className='rounded-lg bg-primary-a30 hover:bg-primary-a20 py-1 px-4 font-bold mt-4 ml-1'>Chat</button>
    </section>

  )

}
