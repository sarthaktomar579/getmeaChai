import React from 'react'

const Username = ({ params }) => {
  return (
    <>
      <div className='cover w-full relative'>

        <img className='w-full object-cover' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/2369690/f9dedd3ede47400aa951056c3484d4ee/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/5.png?token-time=1728000000&token-hash=NiV044x2GC2EX8j71t9e2ffN0-uZb1OAbNB008Usd7U%3D" alt="" />

        <div className='absolute -bottom-16 right-[46%] border-white border-2 rounded-full'>
          <img className='rounded-full' width={150} height={150} src="https://tse2.mm.bing.net/th?id=OIP.CzePmBbEmc4-6F4LOjlkpwHaE7&pid=Api&P=0&h=220" alt="" />
        </div>
      </div>

      <div className='info flex flex-col justify-center gap-1 items-center my-20'>

        <div className='font-bold text-lg'>
          @{params.username}
        </div>

        <div className='text-slate-400'>
          Creating premium audio content
        </div>

        <div className='text-slate-400'>
          59,764 members1,061 posts
        </div>

        <div className="payment flex gap-3 w-[80%]"></div>
      </div>


    </>
  )
}

export default Username
