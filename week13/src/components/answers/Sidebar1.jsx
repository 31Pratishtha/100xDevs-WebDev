import React from 'react'

const Sidebar1 = () => {
  return (
    <div className='flex h-screen w-full' >
      <div className='transition-all duration-1000 delay-100 w-0 ease-in-out bg-red-200 md:w-96'>
        Sidebar
      </div>
      <div className='bg-green-200 dark:bg-green-700 text-black dark:text-white w-full'>
        Content
      </div>
    </div>
  )
}

export default Sidebar1