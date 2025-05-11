import React from 'react'
import AuthProvider from './provider/AuthProvider'
import Routes from './routes'
import Connect from './pages/Connect'

function App() {
  return (
    // <AuthProvider>
    //   <Routes />
    // </AuthProvider>
    <Connect />
  )
}

export default App