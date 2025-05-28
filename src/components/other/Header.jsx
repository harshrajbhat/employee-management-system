import React from 'react'

const Header = () => {
  
  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser', '')
    window.location.reload()
  }

  return (
    <div className=' flex items-end justify-between'>
      <h1 className='text-2xl font-medium text-white'>Hello <br /> <span className='text-3xl text-semibold'>bhai 👋</span></h1>
      <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white px-5 py-3 rounded-sm '>Log Out</button>
    </div>
  )
}

export default Header