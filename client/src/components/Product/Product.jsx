import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <Link to={`/products/${props._id}`}>
      <div
        className="product-card"
        style={{
          background: `url(${props.images[0]}) var(--green)`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="middle">
          <div className="middle-name">{props.name}</div>
          <div className="middle-price">${props.price}</div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
