import React from 'react'
import {Routes, Route} from 'react-router-dom'
import SplashScreen from '../components/screens/SplashScreen'

const SignUpRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<SplashScreen />}/>
    </Routes>
  )
}

export default SignUpRoutes