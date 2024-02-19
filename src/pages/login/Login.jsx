import React, { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'
// styles
import './Login.css'
 
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isPending }=useLogin()

  const handleSubmit = (e) => {
    e.preventDefault()

   login(email, password);
  }
  return (
    <form onSubmit={handleSubmit} className='auth-form'>
      <label >
        <span>Email:</span>
        <input 
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
         />        
      </label>
      <label >
        <span>password:</span>
        <input 
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        required
         />        
      </label>
      {error && <p>{error}</p>}
      {!isPending && <button className="btn">login</button>}
      {isPending && <button className="btn" disabled>login in...</button>}      
    </form>
  )
}

export default Login