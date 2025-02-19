import { useState } from 'react'
import Iteams from './component/Iteams';



function App() {
  const [products,setProducts] = useState([
    {id:0, name:'shipcy', price: 100, items:1},
    {id:1, name:'pesi', price: 200, items:1},
    {id:2, name:'molto', price: 300, items:1},
    {id:3, name:'kranshy', price: 400, items:1},
    {id:4, name:'cigaretes', price: 500, items:1},
])
 
  return (
    <>
      <div>
        <Iteams products={products}/>
      </div>
    </>
  )
}

export default App
