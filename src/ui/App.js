import * as React from 'react';

import ProductList from "./components/ProductList/ProductList";
import BasketList from "./components/BasketList/BasketList";

import Bascket from '../domain/backet';
import { initOferts, initPrices } from '../domain/setUp';


const _basket = new Bascket(initPrices, initOferts);

function App() {

  const products = _basket.getProducts();
  const [basket, setBasket] = React.useState([]);
  const [basketTotal, setTotal] = React.useState(0);

  const scanValue = function(val) {
    _basket.scan(val);
    setBasket(_basket.getBasket());
    setTotal(_basket.total);
  }
  return (
    <div className="App">
      <ProductList values={products} scan={scanValue}/>
      <BasketList values={basket} total={basketTotal}/>
    </div>
  );
}

export default App;
