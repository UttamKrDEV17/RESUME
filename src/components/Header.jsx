import React from 'react'
import Buttons from './Buttons'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className='sticky top-0 z-50 flex items-center justify-between h-16 bg-gray-950 w-full p-8 border-b border-b-gray-700'>
        
        <span className='font-inter text-gray-300 hover:text-gray-100 text-2xl font-bold'>UTTAM KUMAR</span>
        

        <ul className='flex gap-6 items-center'>
          <li className='font-inter text-gray-300 hover:text-gray-100'><NavLink to="/about">About</NavLink></li>
          <li className='font-inter text-gray-300 hover:text-gray-100'><NavLink to="/work">Work</NavLink></li>
          <li className='font-inter text-gray-300 hover:text-gray-100'><NavLink to="/skills">Skills</NavLink></li>
          <li className='font-inter text-gray-300 hover:text-gray-100'><NavLink to="/contact">Contacts</NavLink></li>
          <Buttons buttonText="Download CV" />
        </ul>
        
      </div>
    </>
  )
}

export default Header