import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductView from './ProductView'
import Logo from './Logo'
import Login from './Login'
import Sidebar from './Sidebar'
import ProductViewTest from './ProductViewTest'
import ImageCrop from './ImageCrop'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<ProductView/>}/>
          <Route path='/product' element={<ProductViewTest/>}/>
          <Route path='/logo' element={<Logo/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/sidebar' element={<Sidebar/>}/>
          <Route path='/image' element={<ImageCrop/>}/>
        </Routes>
      </Router>
    </div>

)
}

export default App
