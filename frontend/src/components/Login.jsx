import React from 'react'
import { useAuth } from '../provider/AuthProvider'
import { useNavigate } from 'react-router-dom'

function Login() {
    const { setToken } = useAuth()
    const navigate = useNavigate()
    
    // const handleLogin = () => {
    //   setToken("this is a test token")
    //   navigate("/", {replace: true})
    // }

    // setTimeout(() => {
    //   handleLogin()
    // }, 3 * 1000);

  return (
    <div>Login Page</div>
  )
}

export default Login