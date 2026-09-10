import React from 'react'
import Item from './Item'
import products from '../data/products'

export default function Home({ onAdd }) {
  return (
    <main className="home">
      

      <section className="product-grid">
        {products.map((p) => (
          <Item key={p.id} item={p} onAdd={onAdd} />
        ))}
      </section>
    </main>
  )
}
