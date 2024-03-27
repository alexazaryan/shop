import { useContext } from "react";
import { ShopContext } from "../../context/context";
import BasketItem from "../BasketItem/BasketItem";

// style.css
import "./BasketList.css";

export default function BasketList() {
  //
  const { order, showBasketCart } = useContext(ShopContext);

  const totalPrise = order.reduce((sum, item) => {
    return (sum += item.priceProduct * item.quantity);
  }, 0);

  return (
    <ul className="collection">
      {order.length ? (
        order.map((item) => {
          return <BasketItem {...item} key={item.id} />;
        })
      ) : (
        <li className="collection-item">Корзина пустая</li>
      )}

      <li className="collection-item collection-style">
        Всего: <strong>{totalPrise}</strong> грн
      </li>

      <i
        className="material-icons basket-close"
        onClick={() => showBasketCart()}
      >
        close
      </i>
    </ul>
  );
}
