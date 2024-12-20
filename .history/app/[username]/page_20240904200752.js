import React from 'react'

const Username = ({params}) => {
  return (
    <>
      {params.username}

       <div className='cover w-full bg-red-50 relative'>

        <img className='h-[250] w-full object-cover' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/2369690/f9dedd3ede47400aa951056c3484d4ee/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/5.png?token-time=1728000000&token-hash=NiV044x2GC2EX8j71t9e2ffN0-uZb1OAbNB008Usd7U%3D" alt="" />
        
        <div className='absolute bottom-20 right-[46%] border-white border-2  rounded-full'>
           <img className='rounded-full' width={150} height={150} src="https://wallpaperaccess.com/full/1684069.jpg" alt="" />
        </div>
    
       </div>
    </>
  )
}

export default Username
