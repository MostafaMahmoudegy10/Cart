import { useState } from 'react';
import Header from './component/Header';
import Iteams from './component/cart/Iteams';

function App() {
  const [products, setProducts] = useState([
    { id: 0, name: 'shipcy', price: 100, items: 1 },
    { id: 1, name: 'pesi', price: 200, items: 1 },
    { id: 2, name: 'molto', price: 300, items: 1 },
    { id: 3, name: 'kranshy', price: 400, items: 1 },
    { id: 4, name: 'cigaretes', price: 500, items: 1 }
  ]);

  const [addedProducts] = useState([
    { id: 0, name: 'shipcy', price: 100, items: 1 },
    { id: 1, name: 'pesi', price: 200, items: 1 },
    { id: 2, name: 'molto', price: 300, items: 1 },
    { id: 3, name: 'kranshy', price: 400, items: 1 },
    { id: 4, name: 'cigaretes', price: 500, items: 1 }
  ]);

  const [theme, setTheme] = useState(false);

  // الفانكشن الى هتظبطلى الايتمس الى موجوده
  const inCart = () => {
    return products.filter((product) => product.items >= 1);
  };

  // الفانكشن بتاعت الانكريمينت الايتمس لكل عنصر
  const increment = (id) => {
    setProducts(
      products.map((product) => {
        if (product.id == id) {
          if (product.items < 1) {
            inCart();
          }
          product.items += 1;
        }
        return product;
      })
    );
  };

  const decrement = (id) => {
    setProducts(
      products.map((product) => {
        if (product.id == id) {
          if (product.items <= 1) {
            product.items = 0;
            inCart();
          } else {
            product.items -= 1;
          }
        }
        return product;
      })
    );
  };

  // دا هناهاخد الid بتاع برودكت هجيبه وبعدين هحسبه وارجعه
  const totalForOneProduct = (id) => {
    const pro = products.find((pro) => pro.id == id);
    return pro.price * pro.items;
  };

  // هجيب بتاع البرودكت كلها
  const totalForAllProducts = () => {
    return inCart().reduce((total, product) => {
      return total + totalForOneProduct(product.id);
    }, 0);
  };

  const dark = () => {
    console.log(theme);
    setTheme(!theme);
  };

  const reset = () => {
    setProducts(addedProducts);
  };

  const empty = (res = true) => {
    setProducts(
      products.map((product) => {
        product.items = 0;
        return product;
      })
    );
  };

  return (
    <div className={`${theme ? 'bg-black' : 'bg-white'}`}>
      <div>
        <Header
          inCart={inCart}
          increment={increment}
          dark={dark}
          reset={reset}
          empty={empty}
          theme={theme}
        />
        {inCart().length > 0 ? (
          <Iteams
            products={products}
            increment={increment}
            decrement={decrement}
            totalForOneProduct={totalForOneProduct}
            totalForAllProducts={totalForAllProducts}
          />
        ) : (
          <div className="text-9xl text-red-500 text-center">Empty</div>
        )}
      </div>
    </div>
  );
}

export default App;
