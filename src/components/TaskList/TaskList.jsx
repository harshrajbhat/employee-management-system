import React from 'react'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-70 overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5  mt-5'>
      <div className='flex-shrink-0 h-full p-4 w-[200px] bg-red-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h2 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h2>
          <h4 className='text-sm'>26 May 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Live Project</h2>
        <p className='text-sm'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore adipisci nobis, perspiciatis nesciunt delectus rerum.</p>
      </div>

      <div className='flex-shrink-0 h-full p-4 w-[200px] bg-blue-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h2 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h2>
          <h4 className='text-sm'>26 May 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Live Project</h2>
        <p className='text-sm'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore adipisci nobis, perspiciatis nesciunt delectus rerum.</p>
      </div>

      <div className='flex-shrink-0 h-full p-4 w-[200px] bg-pink-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h2 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h2>
          <h4 className='text-sm'>26 May 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Live Project</h2>
        <p className='text-sm'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore adipisci nobis, perspiciatis nesciunt delectus rerum.</p>
      </div>

      <div className='flex-shrink-0 h-full p-4 w-[200px] bg-yellow-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h2 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h2>
          <h4 className='text-sm'>26 May 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Live Project</h2>
        <p className='text-sm'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore adipisci nobis, perspiciatis nesciunt delectus rerum.</p>
      </div>

      <div className='flex-shrink-0 h-full p-4 w-[200px] bg-purple-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h2 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h2>
          <h4 className='text-sm'>26 May 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Live Project</h2>
        <p className='text-sm'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore adipisci nobis, perspiciatis nesciunt delectus rerum.</p>
      </div>
    </div>

    
  )
}

export default TaskList