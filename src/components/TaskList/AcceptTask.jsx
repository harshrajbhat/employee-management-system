import React from 'react'

const AcceptTask = ({data}) => {
  
  return (
    <div className='flex-shrink-0 h-70 p-4 w-[23%] bg-red-400 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h2 className='bg-red-600 text-xs px-3 py-1 rounded'>{data.category}</h2>
        <h4 className='text-sm'>{data.taskDate}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
      <p className='text-sm'> {data.taskDescription}</p>
      <div className='flex justify-between mt-4'>
        <button className='bg-green-500 rounded-xl py-1 px-2 text-xs'>Mark as Completed</button>
        <button className='bg-red-500 rounded-xl ml-2 py-1 px-2 text-xs'>Mark as Failed</button>
      </div>
    </div>
  )
}

export default AcceptTask