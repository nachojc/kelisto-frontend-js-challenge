import ProductItem from "../ProductItem/ProductItem";

export default function ProductList(props) {
  const { values, scan } = props;

  return (
    <div className="product-list">
      <h1>List of products</h1>
      <div className="product-list-items">
      {
        !!values ?
          Object.keys(values).map((item, i) => (
            <ProductItem value={values[item]} scan={scan} key={i}/>
          )) :
          <div>No products aviable</div>
      }
      </div>
    </div>
  );
}

  