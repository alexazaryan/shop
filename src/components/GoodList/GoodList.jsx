import GoodsItem from "../GoodsItem/GoodsItem";
import { useContext } from "react";
import { ShopContext } from "../../context/context";

import "./GoodList.css";

export default function GoodList() {
  const { goods = [] } = useContext(ShopContext);

  if (!goods.length) {
    return <h3> Товаров нет!!!</h3>;
  }

  return (
    <div className="goods">
      {goods.map((good) => {
        return <GoodsItem key={good.mainId} {...good} />;
      })}
    </div>
  );
}
