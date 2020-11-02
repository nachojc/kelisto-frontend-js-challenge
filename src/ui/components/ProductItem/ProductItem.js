export default function ProductItem(props) {
    const { value, scan } = props;

    return (
      <div className="product-item">
        <div className="item-description">
          <h3>{value.name}</h3>
          <span>£{value.price}</span>
        </div>
        <div className="item-event">
          <button  onClick={() => { scan(value.id); }} >Add to the cart</button>
        </div>
      </div>
    );
  }

  