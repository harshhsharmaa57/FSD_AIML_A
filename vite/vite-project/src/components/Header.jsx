import React from 'react'
import './components.css'

export default function Header({ cartCount }) {
  return (
    <header className="site-header">
      <div className="brand">ShopKeepr</div>
      <div className="search-wrap">
        <input className="search" placeholder="Seaarch products, e.g. shoes" />
      </div>
      <div className="header-actions">
        <button className="cart">Cart ({cartCount})</button>
      </div>
    </header>
  )
}
