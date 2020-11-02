import BasketItem from '../BasketItem/BasketItem';

export default function BasketList(props) {
  const { values, total} = props;
    return (
      <div className="basket-list">
        <div className="basket-list-elements">
          { values && values.length ?
            values.map((item, i) => (
              <BasketItem value={item} key={i}/>
            )) :
            (<div className="basket-item"><h3>No products in the basket</h3></div>)
          }
          <div className="basket-total">
            <div>
              <span>Total</span>
              <span>£{total || 0}</span> 
            </div>
          </div>
        </div>
        { values && values.length ? (
          <div className="basket-list-next">
          <button>Checkout now</button> 
        </div>
        ) : (<div></div>)}
      </div>
    );
  }

  