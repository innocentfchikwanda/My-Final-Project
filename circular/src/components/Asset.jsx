import React, { useState } from "react";
import "./Asset.css";

function Asset({ id, title, image, price, rating }) {
  const [asset, getAsset] = useState({});

  /*const handleClick = () => {
    getAsset(id);
  };
  */

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button
        type="button"
        class="cycle-button"
        onClick={(e) => handleClick(e)}
      >
        Cycle
      </button>
    </div>
  );
}

export default Asset;
