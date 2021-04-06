import React, { useState, useEffect } from "react";
import "./ProductDetail.css";
import Layout from "../../components/shared/Layout/Layout";
import { getProduct, deleteProduct } from "../../services/products";
import { useParams, Link, useHistory } from "react-router-dom";

import Carousel from '../../components/shared/Carousel/Carousel'

const ProductDetail = (props) => {
  const [product, setProduct] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  const history = useHistory()

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

  const delProd = () => {
    deleteProduct(product._id)
    history.push('/products')
  }
  const images = [product.imgURL1, product.imgURL2, product.imgURL3]
  return (
    <Layout user={props.user}>
      <div className="product-detail">
        {/* <img
          className="product-detail-image"
          src={product.imgURL1}
          alt={product.name}
        />
        <img
          className="product-detail-image"
          src={product.imgURL2}
          alt={product.name}
        />
        <img
          className="product-detail-image"
          src={product.imgURL3}
          alt={product.name}
        /> */}
        <Carousel images={images}/>
        <div className="detail">
          <div className="name">{product.name}</div>
          <div className="condition">{product.condition}</div>
          <div className="price">{`$${product.price}`}</div>
          <div className="details">{product.details}</div>
          <div className="button-container">
            <button className="edit-button">
              <Link className="edit-link" to={`/products/${product._id}/edit`}>
                Edit
              </Link>
            </button>
            <button
              className="delete-button"
              onClick={delProd}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
