import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllProduct } from '../../apiServices/api'
import './Home.css'

function Home() {
    const [products, setProducts] = useState([])

    useEffect(() => {
      const fetchProducts = async ()=>{
        const data = await getAllProduct()
        
        setProducts(data)
      }
      
      fetchProducts()
    }, [])
    


  return (
    <div className='product-grid'>
        {
            products.map((product)=>(
                <div className='product' key={product.id}>
                <img src={product.image} alt='product' />
                <h2>{product.title}</h2>
                <p>
                    <span className='price'>${product.price}</span>
                </p>
                <Link to={`/product/ ${product.id}`}>
                <button>Product Details</button>
                </Link>
            </div>
            ))
        }
       

    </div>
  )
}

export default Home