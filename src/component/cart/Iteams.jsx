import React from 'react'
import Product from './Product';

const Iteams = ({products,increment,decrement,totalForOneProduct,totalForAllProducts,deleteProduct,theme}) => {
  return (
    <div className={`text-center px-4  ${theme ? 'bg-black' : 'bg-white'} ` }>
      <div className='grid gap-4 md:gap-6 '>
        {products.map((product) => (
          <Product key={product.id} product={product} increment={increment}  
                   decrement={decrement} totalForOneProduct={totalForOneProduct} 
                   deleteProduct={deleteProduct} theme={theme}/>  
        ))}
      </div>
      <p className='text-4xl md:text-6xl text-red-500 mt-4 pb-3 '>
        Total: {totalForAllProducts()}
      </p>    
    </div>
  )
}

export default Iteams
