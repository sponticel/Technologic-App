import React, { useState, useEffect } from "react";
import "./ProductDetail.css";
import Layout from "../../components/shared/Layout/Layout";
import { getProduct, deleteProduct } from "../../services/products";
import { useParams, Link, useHistory } from "react-router-dom";

import Carousel from "../../components/shared/Carousel/Carousel";

const ProductDetail = (props) => {
  const [product, setProduct] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  const history = useHistory();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
      setLoaded(true);
    };
    fetchProduct();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  const authOpt = () => {
    
  }

  const delProd = () => {
    deleteProduct(product._id);
    history.push("/products");
  };

  return (
    <Layout user={props.user}>
      <div className="product-detail">
        <Carousel className="carousel" images={product.images} />
        <div className="detail">
          <div className="name">{product.name}</div>
          <div className="details">{product.contactInfo}</div>
          <div className="condition">{product.condition}</div>
          <div className="price">{`$${product.price}`}</div>
          <div className="details">{product.details}</div>
          <div className="button-container">
            {props.user && (
              <>
                <Link
                  className="edit-link"
                  to={`/products/${product._id}/edit`}
                >
                  <button className="edit-button">Edit</button>
                </Link>
                <button className="delete-button" onClick={delProd}>
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
