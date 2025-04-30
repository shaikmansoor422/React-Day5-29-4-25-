import React from 'react'
import data from '../../data/data'

const Products = () => {
  return (
    <div>
      {data.products.map((product)=>{
        console.log(product)
      })}

    </div>
  )
}

export default Products
