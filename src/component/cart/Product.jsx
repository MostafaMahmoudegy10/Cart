import React from 'react';

const Product = ({ product, increment, decrement, totalForOneProduct, deleteProduct, theme }) => {
  if (product.items <= 0) return null;
  return (
    <div className={`card w-full shadow-xl  ${theme ? 'bg-gradient-to-r from-[#ff512f] to-[#dd2476]' : 'bg-white'} mt-12`}>
      <div className="card-body flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1 text-center md:text-left">
          <h2 className="card-title text-lg md:text-xl">{product.name}</h2>
          <p className="text-md md:text-lg">Price: ${product.price}</p>
          <p className="text-md md:text-lg">Count: {product.items}</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-2 w-full md:w-auto">
          <div className="flex items-center gap-2">
            <button className="btn btn-primary btn-sm md:btn-md" onClick={() => increment(product.id)}>+</button>
            <button className="btn btn-warning btn-sm md:btn-md" disabled={product.items === 0} onClick={() => decrement(product.id)}>-</button>
          </div>
          
          <button className="btn btn-error btn-sm md:btn-md" onClick={() => deleteProduct(product.id)}>Delete</button>
          
          <p className="text-lg md:text-xl font-semibold ">
            Total: ${totalForOneProduct(product.id)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
