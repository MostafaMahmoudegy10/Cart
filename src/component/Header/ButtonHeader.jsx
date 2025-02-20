import React from 'react'

const ButtonHeader = ({product}) => {
  return (
    <div>
        <button className="btn btn-neutral btn-sm md:btn-md" 
                    onClick={() => increment(product.id)}>
              {product.name}
        </button>
    </div>
  )
}

export default ButtonHeader
