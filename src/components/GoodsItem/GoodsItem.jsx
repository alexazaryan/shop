import { useContext } from "react";
import { ShopContext } from "../../context/context";

// style.css
import "./GoodsItem.css";

export default function GoodsItem({
  mainId,
  displayName,
  price,
  displayDescription: description,
  displayAssets,
}) {
  //  добавление товаров в корзину
  const { addToCard } = useContext(ShopContext);

  //

  const priceProduct = price.regularPrice;

  let productImg = "";

  displayAssets.forEach((img) => (productImg = img.full_background));

  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator activator-img" src={productImg} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {displayName}
        </span>
        <p className="card-description">{description}</p>
      </div>
      <div className="card-h1">
        <div className="card-price">
          <strong>{priceProduct} грн</strong>
        </div>

        <button
          className="btn"
          onClick={() => {
            addToCard({
              id: mainId,
              displayName,
              priceProduct,
            });
          }}
        >
          Купить
        </button>
      </div>
    </div>
  );
}
