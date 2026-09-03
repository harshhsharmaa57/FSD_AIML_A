import React from 'react'
import Item from './Item'
import products from '../data/products'

export default function Home({ onAdd }) {
  return (
    <main className="home">
      <section className="hero-small">
        <h2>Welocme to small town shopping</h2>
        <p>Hand-picked items, few mistakes possible — still good tho.</p>
      </section>

      <section className="product-grid">
        {products.map((p) => (
          <Item key={p.id} item={p} onAdd={onAdd} />
        ))}
      </section>
    </main>
  )
}
