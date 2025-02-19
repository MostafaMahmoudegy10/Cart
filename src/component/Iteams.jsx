import React from 'react'
import Product from './Product';

const Iteams = ({products}) => {
  return (
    <div className='flex flex-wrap justify-between gap-3'>
        {
            products.map((product)=>(
                <Product key={product.id} product={product}/>  
            ))
        }
    </div>
  )
}

export default Iteams
