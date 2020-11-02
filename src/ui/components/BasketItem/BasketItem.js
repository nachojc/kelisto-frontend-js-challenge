export default function BasketItem(props) {
    const { value } = props;

    return (
      <div data-testid="basket-item" className="basket-item">
          <h3>{value.name}</h3>
          <span>{value.units}</span>
      </div>
    );
  }

  