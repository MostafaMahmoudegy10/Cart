import React from 'react'

const ButtonHeader = ({product,increment}) => {
    {console.log(product.id)}
    return (
    
    <div>
        <button className="btn btn-neutral btn-sm md:btn-md w-[100%]" 
                    onClick={() => increment(product.id)}>
              {product.name}
        </button>
    </div>
  )
}

export default ButtonHeader
