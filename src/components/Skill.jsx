import React from 'react'
import javascipt from '../assets/skillLogos/js.svg'
import express from '../assets/skillLogos/expressJS.svg'
import java from '../assets/skillLogos/java.svg'
import Mongodb from '../assets/skillLogos/mongoDB_.svg'
import mySql from '../assets/skillLogos/mySQL.svg'
import node from '../assets/skillLogos/nodeJS.svg'
import logo from '../assets/skillLogos/react.svg'




function Skill() {
  
  return (
    <div className='bg-gray-950 flex flex-col p-12 justify-center'>
            <div className='self-center'>
                <p className='bg-gray-600 text-gray-300 px-5 py-[2px] rounded-2xl text-base font-inter'>Skills</p>
            </div>
            <p className='text-gray-300 font-inter self-center mt-6 text-lg'>The skills, tools and technologies I am really good at:</p>

            <div className='grid grid-cols-5 gap-y-12 mt-20 mb-16'>
             
              <div className='flex flex-col items-center justify-center'>
                <img className='hover:scale-125 transition-transform duration-200' src={javascipt} width='70px' />
                <h1 className='text-gray-200 text-xl py-4'>Javascript</h1>
              </div>

              <div className='flex flex-col items-center justify-center hover:scale-125 transition-transform duration-200'>
                <img src={javascipt} width='70px' />
                <h1 className='text-gray-200 text-xl py-4'>Javascript</h1>
              </div>

              <div className='flex flex-col items-center justify-center'>
                <img src={javascipt} width='70px' />
                <h1 className='text-gray-200 text-xl py-4'>Javascript</h1>
              </div>

              <div className='flex flex-col items-center justify-center'>
                <img src={javascipt} width='70px' />
                <h1 className='text-gray-200 text-xl py-4'>Javascript</h1>
              </div>
              
              <div className='flex flex-col items-center justify-center'>
                <img src={javascipt} width='70px' />
                <h1 className='text-gray-200 text-xl py-4'>Javascript</h1>
              </div>

              <div className='flex flex-col items-center justify-center'>
                <img src={javascipt} width='70px' />
                <h1 className='text-gray-200 text-xl py-4'>Javascript</h1>
              </div>

              <div className='flex flex-col items-center justify-center'>
                <img src={javascipt} width='70px' />
                <h1 className='text-gray-200 text-xl py-4'>Javascript</h1>
              </div>

              <div className='flex flex-col items-center justify-center'>
                <img src={javascipt} width='70px' />
                <h1 className='text-gray-200 text-xl py-4'>Javascript</h1>
              </div>

            </div>
    </div>
  )
}

export default Skill