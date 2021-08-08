import React from 'react'

interface PropPaginationTypes {

}

export default function Pagination({
 
}: PropPaginationTypes): any {
  return (
    <React.Fragment>
      <div className='flex flex-col items-center my-12'>
        <div className='flex text-gray-700'>
          <div className='h-12 w-12 mr-1 flex justify-center items-center rounded-full cursor-pointer'>
            <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='feather feather-chevron-left w-6 h-6'>
              <polyline points='15 18 9 12 15 6'></polyline>
            </svg>
          </div>
          <div className='flex h-12 font-medium rounded-full'>
            <div className='w-12 md:flex justify-center font-xs items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full text-primary'>1</div>
            <div className='w-12 md:flex justify-center font-xs items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-blue-100 text-primary'>2</div>
            <div className='w-12 md:flex justify-center font-xs items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full text-primary'>3</div>
            <div className='w-12 md:flex justify-center font-xs items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full text-primary'>4</div>
            <div className='w-12 md:flex justify-center font-xs items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full text-primary'>4</div>
            <div className='w-12 md:flex justify-center font-xs items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full text-primary'>5</div>
            <div className='w-12 md:flex justify-center font-xs items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full text-primary'>...</div>
            <div className='w-12 md:flex justify-center font-xs items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full text-primary'>100</div>
            <div className='w-12 h-12 md:hidden flex justify-center font-xs items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-teal-600 text-primary'>2</div>
          </div>
          <div className='h-12 w-12 ml-1 flex justify-center items-center rounded-full cursor-pointer'>
            <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='feather feather-chevron-right w-6 h-6'>
              <polyline points='9 18 15 12 9 6'></polyline>
            </svg>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
