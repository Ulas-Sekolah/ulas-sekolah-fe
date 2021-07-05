import React from 'react'

export default function Switch(): any {
  return (
    <React.Fragment>
      <span className="relative">
        <span className="block w-10 h-6 bg-blue-100 rounded-full shadow-inner"></span>
        <span className="absolute block w-4 h-4 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out bg-white transform translate-x-full">
          <input id="checked" type="checkbox" className="absolute opacity-0 w-0 h-0" />
        </span>
      </span>
    </React.Fragment>
  )
}
