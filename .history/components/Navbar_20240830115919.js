import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='bg-gray-900 text-white flex justify-between items-center px-4 h-16'>
       <div className="logo font-bold text-lg flex justify-center items-baseline gap-2">
        <img width={28} src="tea.gif" alt="" />
        <span className='text-2xl'>GetMeAChai!</span>
      </div>
       {/* <ul className='flex justify-between gap-4'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sign up</li>
        <li>Login</li>
       </ul> */}

       <Link href={'/login}>
         <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
            Login
         </button>
       </Link>
    </nav>
  )
}

export default Navbar