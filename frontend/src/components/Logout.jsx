import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../provider/AuthProvider'

function Logout() {
    const { setToken } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        setToken()
        navigate("/", { replace: true })
    }

  return (
    <div>
      <button onClick={()=>{handleLogout()}}>
          Logout
      </button>
    </div>
  )
}

export default Logout