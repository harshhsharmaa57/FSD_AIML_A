import { useState } from 'react'
import './App.css'
import './components/components.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  const [cart, setCart] = useState([])

  function handleAdd(item) {
    setCart((c) => [...c, item])
  }

  return (
    <div>
      <Header cartCount={cart.length} />
      <Navbar />
      <Home onAdd={handleAdd} />
      <Footer />
    </div>
  )
}

export default App
