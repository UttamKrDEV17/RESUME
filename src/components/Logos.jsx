import React from 'react'

function Logos({img,text}) {
  return (
        <div className='flex flex-col items-center justify-center hover:scale-125 transition-transform duration-200'>
            <img src={img} width='70px' />
            <h1 className='text-gray-300 text-lg py-4'>{text}</h1>
        </div>
  )
}

export default Logos