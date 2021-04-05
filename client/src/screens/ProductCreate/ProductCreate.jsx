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
    imgURL: "",
    imgURL2: "",
    imgURL3: "",
    price: "",
    contactInfo: "",
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createProduct(product);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/products`} />;
  }
  return (
    <Layout user={props.user}>
      <form className="create-form" onSubmit={handleSubmit}>
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
          className="condition"
          placeholder="condition"
          value={product.condition}
          name="condition"
          required
          autoFocus
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
          // autoFocus
          onChange={handleChange}
        />
        <input
          className="input-image-link"
          placeholder="Image Link"
          value={product.imgURL1}
          name="imgURL1"
          required
          onChange={handleChange}
        />
        <input
          className="input-image-link"
          placeholder="Image Link 2"
          value={product.imgURL2}
          name="imgURL2"
          // required
          onChange={handleChange}
        />
        <input
          className="input-image-link"
          placeholder="Image Link 3"
          value={product.imgURL3}
          name="imgURL3"
          // required
          onChange={handleChange}
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default ProductCreate;
