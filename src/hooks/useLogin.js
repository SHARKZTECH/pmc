import { useState, useEffect } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

// connect fb
export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  // login(add user)
  const login = async (email, password) => {
    setError(null)
    setIsPending(true)
  
    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password)

      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user })

      if (!isCancelled) {
        setIsPending(false)
        setError(null)
      }
    } 
    catch(err) {
      if (!isCancelled) {
        setError(err.message)
        setIsPending(false)
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { login, isPending, error }
}