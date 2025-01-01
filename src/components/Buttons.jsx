import React from 'react'

function Buttons({
  buttonText,
  buttonColor,
}) {


  return (
    <>
        <button className='bg-gray-100 font-medium font-inter text-gray-950 rounded-xl py-2 px-4 hover:bg-gray-300' >
          <a href="../../public/resume/resume.pdf" download>{ buttonText }</a>
        </button>
    </>
  )
}

export default Buttons