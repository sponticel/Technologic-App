import React, { useState, useEffect } from "react";
import "./ProductEdit.css";
import { useParams, Redirect } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import { getProduct, updateProduct } from "../../services/products";

const ProductEdit = (props) => {
  const params = useParams();
  const [product, setProduct] = useState({
    name: "",
    condition: "",
    details: "",
    images: [],
    price: "",
    contactInfo: "",
    userId: props.user && props.user.id,
  });

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
    };
    fetchProduct();
  }, [id]);

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

    let { id } = params;
    const updated = await updateProduct(id, product);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/products/${params.id}`} />;
  }

  const editImage = (img, i) => {
    return (
      <input
        key={i}
        className="edit-input-image-link"
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
      <div className="product-edit">
        <form className="edit-form-main" onSubmit={handleSubmit}>
          <input
            className="input-name"
            placeholder="Name"
            value={product.name}
            name="name"
            required
            autoFocus
            onChange={handleChange}
          />
          {product.images.map((v, i) => editImage(v, i))}
          <input
            className="input-contact-info"
            placeholder="contact info"
            value={product.contactInfo}
            name="contactInfo"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className="input-condition"
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
            cols={78}
            placeholder="Details"
            value={product.details}
            name="details"
            required
            onChange={handleChange}
          />
          <button type="submit" className="save-button">
            Save
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ProductEdit;
