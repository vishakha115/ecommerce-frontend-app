import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import { currency } from "../../App";

const Item = (props) => {
  console.log(props);
  const { image, name, new_price, old_price } = props;
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0, 0)} src={image} alt="products" />
      </Link>
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          {currency}
          {new_price}
        </div>
        <div className="item-price-old">
          {currency}
          {old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
