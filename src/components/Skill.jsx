import React from 'react'
import javascipt from '../assets/skillLogos/js.svg'
import express from '../assets/skillLogos/expressJS.svg'
import java from '../assets/skillLogos/java.svg'
import Mongodb from '../assets/skillLogos/mongoDB_.svg'
import mySql from '../assets/skillLogos/mySQL.svg'
import node from '../assets/skillLogos/nodeJS.svg'
import Reactlogo from '../assets/skillLogos/react.svg'
import cLang from '../assets/skillLogos/c-lang.svg'
import python from '../assets/skillLogos/python.svg'
import tailwindlogo from '../assets/skillLogos/tailwindcss.svg'
import Logos from './Logos'




function Skill() {
  
  return (
    <div className='bg-gray-950 flex flex-col p-12 justify-center'>
            <div className='self-center'>
                <p className='bg-gray-600 text-gray-300 px-5 py-[2px] rounded-2xl text-base font-inter'>Skills</p>
            </div>
            <p className='text-gray-300 font-inter self-center mt-6 text-lg'>The skills, tools and technologies I am really good at:</p>

            <div className='grid grid-cols-5 gap-y-12 mt-20 mb-16'>
            
              <Logos img={java} text={'Java'} />
              <Logos img={javascipt} text={'Javascript'} />
              <Logos img={express} text={'Express'} />
              <Logos img={node} text={'Node'} />
              <Logos img={Mongodb} text={'MongoDB'} />
              <Logos img={mySql} text={'MySQL'} />
              <Logos img={Reactlogo} text={'React'} />
              <Logos img={cLang} text={'C'} />
              <Logos img={python} text={'Python'} />
              <Logos img={tailwindlogo} text={'Tailwind'} />

            </div>
    </div>
  )
}

export default Skill