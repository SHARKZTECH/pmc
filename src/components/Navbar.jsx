import React from 'react'
import {Link } from "react-router-dom";
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout'
import Notestack from '../assets/notestack_icon.svg'
// styles
import './Navbar.css'

const Navbar = () => {
  const { logout, isPending }= useLogout()
  const { user } = useAuthContext()
  return (
    <nav className='navbar'>
        <ul>
            <li className='logo'>
                <Link to="/">
                    <img src={Notestack} alt="edu bespoke" />
                    <span>Edu Bespoke</span>
                </Link>
            </li>
            {!user && 
            <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
            </>}
            {user && 
            <>
                <li>
                    {!isPending && <button className='btn' onClick={logout}>logout</button>}
                    {isPending &&  <button className='btn' disabled>logging out...</button>}                             
                </li>
            </>}        
        </ul>
    </nav>
  )
}

export default Navbar