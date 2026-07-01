import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import Customize from './pages/Customize'
import Home from './pages/Home.jsx'
import { useContext } from 'react'
import Customize2 from './pages/Customize2'
import { userDataContext } from './context/UserContext'

function App() {
  const { userData, setUserData } = useContext(userDataContext)
  return (
    <Routes>
      <Route path='/' element={(userData?.assistantImage && userData?.assistantName)?<Home/> : <Navigate to={"/customize"}/>} />
      <Route path='/signup' element={(!userData)?<SignUp /> : <Navigate to={"/customize"}/>} />
      <Route path='/signin' element={(!userData)?<SignIn /> : <Navigate to={"/"}/>} />
      <Route path='/customize' element={(userData)?<Customize /> : <Navigate to={"/signin"}/>} />
       <Route path='/customize2' element={(userData)?<Customize2 /> : <Navigate to={"/signin"}/>} />
    </Routes>
  )
}

export default App