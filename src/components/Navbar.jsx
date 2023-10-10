import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='nav'>
        <div className='inner-nav'>
            <div>
              <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
            </div>
            <div>
            <Link to={'/products'} style={{ textDecoration: 'none' , color: 'white' }}>Products</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar
