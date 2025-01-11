import React from 'react'
import { Icon } from '@iconify-icon/react/dist/iconify.js'

function Contacts() {
  const phoneNumber = "+91-9155735467"
  const email = "uttamkr244@gmail.com"

  const copyNumberToClipboard = () => {
    navigator.clipboard.writeText(phoneNumber).then(() => {
      console.log('success')
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      console.log('success')
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <div className='h-[80vh] bg-gray-900 flex flex-col items-center gap-8'>
      <p className='bg-gray-600 text-gray-300 px-5 py-[2px] mt-[10vh] rounded-2xl text-base font-inter'>Contacts</p>
      <p className='text-gray-300 text-xl w-2/5 leading-relaxed text-center font-inter'>What’s next? Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect.</p>
      
      <div className='flex items-center space-x-6'>
        <Icon icon="ic:outline-mail" width="32" height="32"  style={{color: "white", verticalAlign: 'middle'}} />
        <p className='text-gray-200 text-4xl font-semibold'>uttamkr244@gmail.com</p>
        <Icon icon="tabler:copy" width="32" height="32"  style={{color: "white", verticalAlign: 'middle'}} onClick={copyEmailToClipboard}/>
      </div>
      <div className='flex items-center space-x-6'>
        <Icon icon="ion:call-outline" width="32" height="32"  style={{color: "white", verticalAlign: 'middle'}} />
        <p className='text-gray-200 text-4xl font-semibold'>+91-9155735467</p>
        <Icon icon="tabler:copy" width="32" height="32"  style={{color: "white", verticalAlign: 'middle'}} onClick={copyNumberToClipboard}/>
      </div>
      <p className='text-gray-300 text-lg'>You may also find me on these platforms!</p>
      <div className='flex gap-3'>
      <Icon icon="mdi:github" width="24" height="24"  style={{color: '#9d9d9d'}} />
      <Icon icon="prime:twitter" width="24" height="24"  style={{color: '#9d9d9d'}} />
      </div>
      
    </div>
  )
}

export default Contacts