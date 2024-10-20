import 'remixicon/fonts/remixicon.css'
import ProductsProvider from './contextApi/ProductsProvider'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import ProductDetails from './components/ProductDetails/ProductDetails'

import './index.css'
import 'animate.css';

const App = () => {
  return (
    <ProductsProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </ProductsProvider>
  )
}

export default App
