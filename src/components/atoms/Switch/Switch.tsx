import React from 'react'
import { useStore } from 'provider'

export default function Switch(): any {
  const { drakMode, setDrakMode } = useStore()
  const handleSwitch = () => {
    setDrakMode(!drakMode)
  }

  return (
    <React.Fragment>
      <button className='relative focus:outline-none' onClick={handleSwitch}>
        <span className={`block w-10 h-6 rounded-full shadow-inner ${drakMode ? 'bg-blue-300' : 'bg-blue-100'}`}></span>
        <span className={`absolute block w-4 h-4 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out transform ${drakMode ? 'bg-gray-300' : 'bg-white'} ${drakMode && 'translate-x-full'}`}>
          <input id='checked' type='checkbox' className='absolute opacity-0 w-0 h-0' />
        </span>
      </button>
    </React.Fragment>
  )
}
