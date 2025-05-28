import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const authData = useContext(AuthContext)

  return (
    
    <div className='bg-[#1C1C1C] p-5 rounded mt-5 h-60 '>
      
      <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='w-1/ text-lg font-medium '>Employee Name</h2>
        <h3 className='w-1/ text-lg font-medium '>New Task</h3>
        <h5 className='w-1/ text-lg font-medium '>Active Task</h5>
        <h5 className='w-1/ text-lg font-medium '>Completed</h5>
        <h5 className='w-1/ text-lg font-medium '>Failed</h5>


      </div>

      <div className='h-[80%] overflow-auto'>
        {authData.employees.map(function(elem, idx){
          return <div key={idx} className='bg-emerald-800 mb-2 py-2 px-4 flex justify-between rounded'>
          <h2 className='w-1/ text-lg font-medium '>{elem.firstname}</h2>
          <h3 className='w-1/ text-lg font-medium text-blue-300'>{elem.taskCounts.newTask}</h3>
          <h5 className='w-1/ text-lg font-medium text-yellow-400'>{elem.taskCounts.active}</h5>
          <h5 className='w-1/ text-lg font-medium text-green-600'>{elem.taskCounts.completed}</h5>
          <h5 className='w-1/ text-lg font-medium text-red-600'>{elem.taskCounts.failed}</h5>
        </div>
        })}
      </div>
      

      
    </div>
  )
}

export default AllTask