import React from 'react'

const Product = ({product:{id,name,price,items,photo},increment,decrement,totalForOneProduct,deleteProduct}) => {
  return (

    <div>
        
               
           { 
            (items>0)?
            <div className=  "card  w-full shadow-xl">
            <div className="card-body flex flex-row items-center justify-between">
                <h2 className="card-title">Name:{name}</h2>
                <p>Price:{price}</p>
                <p>Count:{items}</p>
                <button className="btn btn-primary" onClick={()=>{increment(id)}}>+</button>
                <button disabled={items==0} className="btn btn-warning" onClick={()=>{decrement(id)} }>-</button>     
                <button  className="btn btn-warning" onClick={()=>{deleteProduct(id)} }>Delete </button>         
                <p>total:{totalForOneProduct(id)}</p> 
            </div>
            </div> :
            <div></div>
        }
    
    </div>
    
  )
}

export default Product
