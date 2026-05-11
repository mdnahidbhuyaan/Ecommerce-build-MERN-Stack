import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'

const App = () => {
  return (
    <div className=''>
      <div>
        <h1>Home</h1>
        <p></p>
        
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product/>} />
          <Route path='/product/:id' element={<ProductDetails/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
