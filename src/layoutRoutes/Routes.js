import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Home from '../components/home/Home'
import Signup from '../components/Login/Login'
import ProductDetails from '../components/ProductDetails/ProductDetails'

function Routess() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/login' element={<Signup/>} />
    <Route path='/product/:id' element={<ProductDetails/>} />

    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default Routess