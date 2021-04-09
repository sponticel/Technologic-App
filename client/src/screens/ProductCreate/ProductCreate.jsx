import React, { useState } from "react";
import "./ProductCreate.css";
import Layout from "../../components/shared/Layout/Layout";
import { Redirect } from "react-router-dom";
import { createProduct } from "../../services/products";

const ProductCreate = (props) => {
  const [product, setProduct] = useState({
    name: "",
    condition: "",
    details: "",
    images: [...Array(3).fill("")],
    price: "",
    contactInfo: "",
    userId: props.user.id,
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const images = [...product.images];
    const { name, value } = event.target;
    const i = event.target.id;
    images[i] = value;
    if (name === "images") {
      setProduct({
        ...product,
        images: [...images],
      });
    } else {
      setProduct({
        ...product,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createProduct(product);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/products`} />;
  }

  const addImage = (img, i) => {
    return (
      <input
        key={i}
        className="input-image-link"
        placeholder="Image Link"
        id={i}
        value={img}
        name={`images`}
        onChange={handleChange}
      />
    );
  };

  return (
    <Layout user={props.user}>
      <div className="create-form">
        <form className="input-add" onSubmit={handleSubmit}>
          <input
            className="input-name"
            placeholder="Name"
            value={product.name}
            name="name"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className="input-condition"
            placeholder="Condition"
            value={product.condition}
            name="condition"
            required
            // autoFocus
            onChange={handleChange}
          />
          <input
            className="input-price"
            placeholder="Price"
            value={product.price}
            name="price"
            required
            onChange={handleChange}
          />
          <textarea
            className="textarea-details"
            rows={10}
            placeholder="Details"
            value={product.details}
            name="details"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            className="input-contact-info"
            placeholder="Contact Info"
            value={product.contactInfo}
            name="contactInfo"
            required
            onChange={handleChange}
          />
          {product.images.map((v, i) => addImage(v, i))}
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ProductCreate;
