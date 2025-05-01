import { CartItem } from "./CartItem";

const CartList = (props) => {
  const { order = [], 
    handleCartShow = Function.prototype,
    removeFromCart = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype
   } = props;

  const totalPrice = order.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <ul className="collection cart-list">
      <li href="#!" className="collection-item active">Cart</li>
      {
        order.length ? order.map((item) => (
            <CartItem key={item.id} {...item} removeFromCart={removeFromCart} incQuantity={incQuantity} decQuantity={decQuantity}/>
            )) : <li className="collection-item">Cart is empty</li>
 
      }
      <li href="#!" className="collection-item active">Total: {totalPrice} $</li>

      <i className="material-icons cart-close" onClick={handleCartShow}>close</i>
    </ul>
  );
};

export { CartList };
