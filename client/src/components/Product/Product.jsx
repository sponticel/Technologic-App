import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom'

const Product = (props) => {
    return (
        
            <Link to={`/products/${props._id}`}>
           
            <div className="product-card" style={{backgroundImage: `url(${props.imgURL1})`}}>
            
                  {/* <div className="product-image-container"> */}
                      {/* <img className="product-image" src={props.imgURL1} alt={props.name} /> */}
                      <div className="middle">
                        {props.name}
                        {props.price}
                      </div>
                  {/* </div> */}
                {/* <img className="product-image" src={props.imgURL2} alt={props.name} />
                <img className="product-image" src={props.imgURL3} alt={props.name} />                 */}
                {/* <div className="product-name">{props.name}</div>
                <div className="product-condition">{props.condition}</div>
                <div className="product-details">{props.details}</div>
                <div className="price">{`$${props.price}`}</div>
                <div className="product-contact-info">{props.contactInfo}</div> */}
                </div>
            </Link>
        
    )
}

export default Product