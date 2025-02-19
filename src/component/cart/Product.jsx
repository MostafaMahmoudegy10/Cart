import React from 'react'

const Product = ({product:{id,name,price,items,photo},increment,decrement,totalForOneProduct}) => {
  return (

    <div>
        
               
           { 
            (items>0)?
            <div className=  "card  w-full shadow-xl">
            <div className="card-body flex flex-row items-center justify-between">
                <h2 className="card-title">Name:{name}</h2>
                <p>Price:{price}</p>
                <p>Count:{items}</p>
                <button className="btn btn-primary" onClick={()=>{increment(id)}}>Add to cart</button>
                <button disabled={items==0} className="btn btn-warning" onClick={()=>{decrement(id)} }>Delete from cart</button>       
                <p>total:{totalForOneProduct(id)}</p> 
            </div>
            </div> :
            <div></div>
        }
    
    </div>
    
  )
}

export default Product
