import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
      <Link to='/' style={{textDecoration:'none',color:'#ff5723'}}>
        <h1>new stores</h1>
      </Link>
        <Link to='/login'>
        <button className='login-button' >Log in</button>
        </Link>
       
    </header>
  )
}

export default Header