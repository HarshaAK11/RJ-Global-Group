import React from 'react'
import image from '../assets/404.png'

const Notfound = () => {
  return (
    <div className='w-full h-screen bg-[#83D9C8] flex flex-col gap-10 justify-center items-center text-[#386177] p-[150px]'>
      <img src={image} alt="404" className='size-[25rem]'/>
      <div className='text-center'>
        <h1 className='text-4xl mb-6'>This Page is Not on the Map</h1>
        <p className='text-xl'>You told your friends you weren’t bringing your phone, to try and experience what travel was like back in the day. You bought a map and a bottle of water and carried your camera for the money shot. But the map was from 2005 and the landscape had changed. So here you are, in the middle of a large field, that the map continues to claim is a local grocer.</p>
      </div>
    </div>
  )
}

export default Notfound