import React, { Component } from "react";

import { getUserProducts } from "../../services/users";

import Layout from "../../components/shared/Layout/Layout";
import Product from "../../components/Product/Product";

import "./UserDetail.css"

export default class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.user = props.user;
    this.state = {
      queriedProducts: [],
      users: [],
      userId: props.user.id,
      len: ''
    };
  }

  componentDidMount() {
    const fetchUsers = async () => {
      const userProducts = await getUserProducts(this.state.userId);
      this.setState({
        queriedProducts: userProducts,
        len: userProducts.length
      });
    };

    fetchUsers();
    this.setState({
      users: [this.user],
    });
  }

  profile = (user) => (
    <div className="user-greeting">
      <h1>{`Hello, ${user.username}`}</h1>
      <div className="user-info">
        <h3>{`${user.email}`}</h3>
        <h3>{`${this.state.len} product${(this.state.len > 1) ? 's' : ''}`}</h3>
      </div>
    </div>
  );

  productsJSX() {
    return this.state.queriedProducts.map((product, index) => (
      <Product
        _id={product._id}
        name={product.name}
        images={product.images}
        price={product.price}
        key={index}
      />
    ));
  }

  render() {
    return (
      <>
        <Layout user={this.user}>
          {this.user ? this.profile(this.user) : "Maybe create an account."}
          <div className="products user-products">{this.productsJSX()}</div>
        </Layout>
      </>
    );
  }
}
