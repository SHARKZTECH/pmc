import React from 'react'
import {Route,Routes, Navigate} from "react-router-dom";
import { useAuthContext } from './hooks/useAuthContext';
// styles
import './App.css'

// components
import Dashboard from './pages/dashboard/Dashboard'
import Create from './pages/create/Create'
import Document from './pages/document/Document'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const App = () => {
  const{authIsReady, user} = useAuthContext()

  return (
    <div className='App'>
      {authIsReady && (
      <>
      <Sidebar />
      <div className="container">
        <Navbar />
        <Routes>       
          <Route path="/" element={user ? <Dashboard /> : <Navigate to="/login"/> }/>
          <Route path="/create" element={user ? <Create /> : <Navigate to="/login"/>} />
          <Route path="/documents/:id" element={user ? <Document />: <Navigate to="/login"/>} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login/>} /> 
          <Route path="/signup" element={user ? <Navigate to="/" />: <Signup/>} /> 
        </Routes>
      </div>
        </>
      )}      
    </div>
  )
}

export default App