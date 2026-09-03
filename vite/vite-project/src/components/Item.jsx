import React from 'react'

export default function Item({ item, onAdd }) {
  return (
    <div className="product-card">
      <img src={item.image} alt={item.name} className="product-img" />
      <div className="product-body">
        <h3 className="product-title">{item.name}</h3>
        <p className="product-price">${item.price}</p>
        <button className="add-btn" onClick={() => onAdd(item)}>Addd to cart</button>
      </div>
    </div>
  )
}
