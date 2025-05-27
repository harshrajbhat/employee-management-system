import React from 'react'

const CreateTask = () => {
  return (
    <div className='mt-10 flex flex-col md:flex-row items-start justify-start gap-5 bg-[#1C1C1C] p-3'>
    {/* Left Side Form Fields */}
    <form className='flex flex-col w-full md:w-2/3 space-y-5'>
      <div>
        <h3 className='mb-1 text-lg font-semibold'>Task Title</h3>
        <input 
          type="text" 
          placeholder='Make a UI Design' 
          className='w-full p-3 bg-transparent border border-white rounded-md placeholder-white text-white outline-none'
        />
      </div>

      <div>
        <h3 className='mb-1 text-lg font-semibold'>Date</h3>
        <input 
          type="date" 
          className='w-full p-3 bg-transparent border border-white rounded-md text-white outline-none'
        />
      </div>

      <div>
        <h3 className='mb-1 text-lg font-semibold'>Assign To</h3>
        <input 
          type="text" 
          placeholder='Employee Name' 
          className='w-full p-3 bg-transparent border border-white rounded-md placeholder-white text-white outline-none'
        />
      </div>

      <div>
        <h3 className='mb-1 text-lg font-semibold'>Category</h3>
        <input 
          type="text" 
          placeholder='design, dev, etc' 
          className='w-full p-3 bg-transparent border border-white rounded-md placeholder-white text-white outline-none'
        />
      </div>
    </form>

    {/* Right Side Description and Button */}
    <div className='w-full md:w-1/3 flex flex-col space-y-5'>
      <div>
        <h3 className='mb-1 text-lg font-semibold'>Description</h3>
        <textarea 
          placeholder="Describe the task..." 
          className='w-full p-3 bg-transparent border border-white rounded-md placeholder-white text-white outline-none resize-none'
          rows="8"
        ></textarea>
      </div>

      <button 
        type='submit' 
        className='w-full bg-green-600 hover:bg-green-700 transition-all py-3 text-white text-lg font-semibold rounded-md'
      >
        Create Task
      </button>
    </div>
  </div>
  )
}

export default CreateTask