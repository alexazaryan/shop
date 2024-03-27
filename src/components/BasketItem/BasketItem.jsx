import { useContext } from "react";
import { ShopContext } from "../../context/context";

import "./BasketItem.css";

export default function BasketItem({
  displayName,
  id,
  quantity,
  priceProduct,
}) {
  const { decrementQuantity, incrementQuantity } = useContext(ShopContext);

  return (
    <>
      <li className="wrap collection-item">
        <div className="s1">{displayName}</div>

        <div className="s2">
          <ul className="wrap-li">
            <li className="counter" onClick={() => incrementQuantity(id)}>
              -
            </li>
            <li>Колличество шт: {quantity}</li>
            <li className="counter" onClick={() => decrementQuantity(id)}>
              +
            </li>
            <li> = {quantity * priceProduct}</li>
          </ul>
        </div>

        <i
          className="material-icons delete-item s3"
          onClick={() => deleteProductCart(id)}
        >
          close
        </i>
      </li>
    </>
  );
}
