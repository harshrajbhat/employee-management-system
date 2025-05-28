import React, {useContext, useEffect, useState} from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider';
import { setLocalStorage } from './utils/localStorage';

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)
  
  // useEffect(() => {
  //   const storedEmployees = localStorage.getItem('employees')
  //   const storedAdmin = localStorage.getItem('admin')

  //   if (!storedEmployees && !storedAdmin) {
  //     setLocalStorage()
  //   }
  // },)
// localStorage.clear()
// setLocalStorage()


  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      if (userData.role === 'employee' && userData.data) {
        setLoggedInUserData(userData.data)
      }
    }
  }, [])

  

  const handleLogin = (email,password)=>{
    if (email == 'admin@example.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    } else if (authData){
      const employee = authData.employees.find((e)=> email == e.email && password == e.password)
      if (employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data:employee}))
      }
    } else{
      alert("Invalid Credentials")
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/>: ''}
      {user == 'admin' ? <AdminDashboard /> : (user == 'employee' ? <EmployeeDashboard data={loggedInUserData}/> : null)}
    </>
  );
};

export default App;