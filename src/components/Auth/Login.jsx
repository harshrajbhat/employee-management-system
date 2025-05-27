import React, { useState } from 'react';

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    setEmail("")
    setPassword("")
  };

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form 
          onSubmit={submitHandler}
          className='flex flex-col items-center justify-center'
        >
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='Enter your Email'
            className='border-2 border-emerald-600 rounded-full py-3 px-5 text-xl text-white outline-none bg-transparent placeholder:text-gray-400'
          />
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder='Enter Password'
            className='border-2 border-emerald-600 mt-3 rounded-full py-3 px-5 text-xl text-white outline-none bg-transparent placeholder:text-gray-400'
          />
          <button 
            type="submit"
            className='border-none mt-5 bg-emerald-600 rounded-full py-3 px-5 text-xl text-white outline-none'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
