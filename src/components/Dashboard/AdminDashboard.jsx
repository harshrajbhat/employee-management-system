import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = () => {
  return (
    <div className='text-white h-full w-full p-10 bg-gray-900'>
      <Header />
      <CreateTask />
      <AllTask />
    </div>


  )
}

export default AdminDashboard