import React, { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'
// styles
import './Signup.css'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const { signup, error, isPending } = useSignup()
 
  const handleSubmit = (e) => {
    e.preventDefault()

    signup(email, password, displayName);
  }
  return (
    <form className='auth-form' onSubmit={handleSubmit}>
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
      <label >
        <span>Display name:</span>
        <input 
        type="text"
        onChange={(e) => setDisplayName(e.target.value)}
        value={displayName}
        required
         />        
      </label>
      {!isPending && <button className='btn'>signup</button>}
      {isPending &&  <button className='btn' disabled>loading ...</button>}
      {error && <p>{error}</p>}
     
    </form>
  )
}

export default Signup