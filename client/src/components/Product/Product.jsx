import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom'

const Product = (props) => {
    return (
        <>
            <Link className="product" to={`/products/${props._id}`}>
                <img className="product-image" src={props.imgURL} alt={props.name} />
                <img className="product-image" src={props.imgURL2} alt={props.name} />
                <img className="product-image" src={props.imgURL3} alt={props.name} />                
                <div className="product-name">{props.name}</div>
                <div className="product-condition">{props.condition}</div>
                <div className="product-details">{props.details}</div>
                <div className="price">{`$${props.price}`}</div>
                <div className="product-contact-info">{props.contactInfo}</div>
            </Link>
        </>
    )
}

export default Product