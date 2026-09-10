import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navBar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cloths">Cloths</Link></li>
        <li><Link to="/shoes">Shoes</Link></li>
        <li><Link to="/accessories">Accessories</Link></li>
        <li><Link to="/deals">Deals</Link></li>
      </ul>
    </nav>
  )
}
