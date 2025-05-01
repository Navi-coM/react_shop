import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { CartList } from "./CartList";

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isCartShow, setCartShow,] = useState(false);


  const addToCart = (item) => {

    const itemIndex = order.findIndex(orderItem => orderItem.id === item.id);

    if(itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      }
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if(index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          }
        } else {
          return orderItem;
        }
      })
      setOrder(newOrder);
    }
  }

  const removeFromCart = (itemId) => {
    const newOrder = order.filter((orderItem) => orderItem.id !== itemId);
    setOrder(newOrder);
  }

  const handleCartShow = () => {
    setCartShow(!isCartShow);
  }

  const incQuantity = (itemId) => {
    const newOrder = order.map((orderItem) => {
      if(orderItem.id === itemId) {
        return {
          ...orderItem,
          quantity: orderItem.quantity + 1,
        }
      } else {
        return orderItem;
      }
    })
    setOrder(newOrder);
  }

  const decQuantity = (itemId) => {
    const newOrder = order.map((orderItem) => {
      if(orderItem.id === itemId) {
        const newQuantity = orderItem.quantity - 1;
        return {
          ...orderItem,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        }
      } else {
        return orderItem;
      }
    })
    setOrder(newOrder);
  }

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.items) {
          const slicedItems = data.items.slice(0, 20);
          setGoods(slicedItems);
        }
        setLoading(false);
      });
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} handleCartShow={handleCartShow}/>
      {loading ? <Preloader /> : <GoodsList goods={goods} addToCart={addToCart}/>}
      {
        isCartShow && <CartList order={order} handleCartShow={handleCartShow} removeFromCart={removeFromCart} incQuantity={incQuantity} decQuantity={decQuantity}/>
      }
    </main>
  );
};

export { Shop };
