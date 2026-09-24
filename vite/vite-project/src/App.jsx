import { useState } from 'react'
import './App.css'
import './components/components.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function NavPage({ title }) {
  return <h1>{title}</h1>
}

function App() {
  const [cart, setCart] = useState([])

  function handleAdd(item) {
    setCart((c) => [...c, item])
  }

  return (
    <BrowserRouter>
      <div>
        <Header cartCount={cart.length} />
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home onAdd={handleAdd} />} />
            <Route path="/cloths" element={<NavPage title="Cloths" />} />
            <Route path="/shoes" element={<NavPage title="Shoes" />} />
            <Route path="/accessories" element={<NavPage title="Accessories" />} />
            <Route path="/deals" element={<NavPage title="Deals" />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App



