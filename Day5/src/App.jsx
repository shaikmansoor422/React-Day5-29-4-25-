import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from "react-router-dom"
import Home from './components/Home/Home'
import About from './components/About/About'
import Products from './components/products/products'
// import Products from './components/products/products'
const App = () => {
    return (
        <>
                <Navbar> </Navbar>
                <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/products' element={<Products></Products>}></Route>


                </Routes>

        </>
    )
}

export default App
