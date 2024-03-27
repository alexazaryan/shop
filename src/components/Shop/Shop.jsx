import { useState, useEffect, useContext } from "react";
import { API_KEY, API_URL } from "../../config";
import { ShopContext } from "../../context/context";
import GoodList from "../GoodList/GoodList";
import Preloader from "../Preloader/Preloader";
import BasketList from "../BasketList/BasketList";
import Alert from "../Alert/Alert";
import Card from "../Card/Card";

// style.css
import "./Shop.css";

export default function Shop() {
  const { setGoods, loading, displayName, showBasket } =
    useContext(ShopContext);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      // выучить
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        data.shop && setGoods(data.shop);
      });
  }, []);

  return (
    <main className="container content">
      <Card />
      {displayName && <Alert />}

      {showBasket && <BasketList />}

      {loading ? <Preloader /> : <GoodList />}
    </main>
  );
}
