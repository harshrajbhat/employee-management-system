import React, { useEffect, useState } from 'react'

const CreateTask = () => {
  const [employees, setEmployees] = useState([])
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [selectedEmployeeId, setSelectedEmployeeId] = useState('')
  const [category, setCategory] = useState('')

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('employees')) || []
    setEmployees(stored)
  }, [])

  const submitHandler = (e) => {
    e.preventDefault()

    if (!selectedEmployeeId) {
      alert('Please select an employee.')
      return
    }

    const updatedEmployees = [...employees]
    const employeeIndex = updatedEmployees.findIndex(emp => emp.id === parseInt(selectedEmployeeId))

    if (employeeIndex === -1) {
      alert('Selected employee not found.')
      return
    }

    const newTask = {
      active: true,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle,
      taskDescription,
      taskDate,
      category
    }

    const emp = updatedEmployees[employeeIndex]
    emp.tasks.push(newTask)
    emp.taskCounts.active += 1
    emp.taskCounts.newTask += 1

    localStorage.setItem('employees', JSON.stringify(updatedEmployees))
    setEmployees(updatedEmployees)

    setTaskTitle('')
    setTaskDescription('')
    setTaskDate('')
    setSelectedEmployeeId('')
    setCategory('')

    alert('Task created and assigned successfully!')
    window.location.reload()
  }

  return (
    <form
      onSubmit={submitHandler}
      className='mt-10 flex flex-col md:flex-row items-start justify-start gap-5 bg-[#1C1C1C] p-3'
    >
      {/* Left Side */}
      <div className='flex flex-col w-full md:w-2/3 space-y-5'>
        <div>
          <h3 className='mb-1 text-lg font-semibold'>Task Title</h3>
          <input
            type="text"
            placeholder='Make a UI Design'
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            className='w-full p-3 bg-transparent border border-white rounded-md placeholder-white text-white outline-none'
            required
          />
        </div>

        <div>
          <h3 className='mb-1 text-lg font-semibold'>Date</h3>
          <input
            type="date"
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            className='w-full p-3 bg-transparent border border-white rounded-md text-white outline-none'
            required
          />
        </div>

        <div>
          <h3 className='mb-1 text-lg font-semibold'>Assign To</h3>
          <select
            value={selectedEmployeeId}
            onChange={(e) => setSelectedEmployeeId(e.target.value)}
            className='w-full p-3 bg-transparent border border-white rounded-md text-white outline-none'
            required
          >
            <option value="" disabled>Select Employee</option>
            {employees.map(emp => (
              <option key={emp.id} value={emp.id}>
                {emp.firstname} ({emp.email})
              </option>
            ))}
          </select>
        </div>

        <div>
          <h3 className='mb-1 text-lg font-semibold'>Category</h3>
          <input
            type="text"
            placeholder='design, dev, etc'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className='w-full p-3 bg-transparent border border-white rounded-md placeholder-white text-white outline-none'
            required
          />
        </div>
      </div>

      {/* Right Side */}
      <div className='w-full md:w-1/3 flex flex-col space-y-5'>
        <div>
          <h3 className='mb-1 text-lg font-semibold'>Description</h3>
          <textarea
            placeholder="Describe the task..."
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className='w-full p-3 bg-transparent border border-white rounded-md placeholder-white text-white outline-none resize-none'
            rows="8"
            required
          ></textarea>
        </div>

        <button
          type='submit'
          className='w-full bg-green-600 hover:bg-green-700 transition-all py-3 text-white text-lg font-semibold rounded-md'
        >
          Create Task
        </button>
      </div>
    </form>
  )
}

export default CreateTask
