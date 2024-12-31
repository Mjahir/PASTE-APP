import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center mb-4 p-4 bg-gray-800 rounded-2xl'>
          <NavLink
          to="/" className='text-xl font-semibold text-blue-500 hover:text-blue-700'>
            Home
          </NavLink>
          
          <NavLink
          to="/pastes" className='text-xl font-semibold text-blue-500 hover:text-blue-700'>
             Pastes
    </NavLink>
    </div>
  )
}

export default Navbar
