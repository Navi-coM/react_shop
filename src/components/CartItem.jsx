const CartItem = (props) => {
  const {
    id,
    name,
    price,
    quantity,
    removeFromCart = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  return (
    <li className="collection-item">
      {name} x <i className="material-icons cart-quantity_icon" onClick={() => decQuantity(id)}>remove</i>
      {quantity}
      <i className="material-icons cart-quantity_icon" onClick={() => incQuantity(id)}>add</i> = {price * quantity} $
      <span className="secondary-content" onClick={() => removeFromCart(id)}>
        <i className="material-icons cart-delete">close</i>
      </span>
    </li>
  );
};

export { CartItem };
