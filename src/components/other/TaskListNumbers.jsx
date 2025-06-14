import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex justify-between gap-5 screen '>
      <div className='p-10 w-[45%] rounded-xl px-6 py-10 mt-5 bg-blue-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>

      <div className='p-10 w-[45%] rounded-xl px-6 py-10 mt-5 bg-green-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>

      <div className='p-10 w-[45%] rounded-xl px-6 py-10 mt-5 bg-yellow-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
        <h3 className='text-xl font-medium'>Active Task</h3>
      </div>

      <div className='p-10 w-[45%] rounded-xl px-6 py-10 mt-5 bg-red-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers