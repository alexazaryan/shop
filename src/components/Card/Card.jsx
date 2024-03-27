import { useContext } from "react";
import { ShopContext } from "../../context/context";

import "./Card.css";

export default function Card() {
  const { showBasketCart, order } = useContext(ShopContext);
  const newOrder = order.length;

  return (
    <div className="card-position" onClick={() => showBasketCart()}>
      <div className="wrap-img-res">
        <div className="wrap-header-jpg">
          <img className="header-jpg" src="./img/cart.png" alt="cart" />
        </div>
        <p className="res">{newOrder > 0 ? newOrder : null}</p>
      </div>
    </div>
  );
}
