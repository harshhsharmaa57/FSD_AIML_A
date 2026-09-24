import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Stopwatch from './Stopwatch';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/stopwatch">Stopwatch</Link>
            </li>
          </ul>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/stopwatch" element={<Stopwatch />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
