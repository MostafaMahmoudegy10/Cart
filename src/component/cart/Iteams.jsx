import React from 'react'
import Product from './Product';

const Iteams = ({products,increment,decrement,totalForOneProduct,totalForAllProducts}) => {
  return (
    <div className='text-center'>
       {
        products.map((product) => (
            <Product key={product.id} product={product} increment={increment}  decrement={decrement} 
            totalForOneProduct={totalForOneProduct} />  
        ))
      }
              <p className='text-6xl text-red-500'>total:{totalForAllProducts()}</p>    
    </div>
  )
}

export default Iteams
