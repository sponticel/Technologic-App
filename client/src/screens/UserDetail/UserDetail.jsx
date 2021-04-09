import React, { Component } from "react";

import { getUserProducts } from "../../services/users";

import Layout from "../../components/shared/Layout/Layout";
import Product from "../../components/Product/Product";

export default class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.user = props.user;
    this.state = {
      queriedProducts: [],
      users: [],
      userId: props.user.id,
    };
  }
  
  componentDidMount() {
    const fetchUsers = async () => {
      const userProducts = await getUserProducts(this.state.userId);
      this.setState({
        queriedProducts: userProducts,
      });
    };

    fetchUsers();
    this.setState({
      users: [this.user],
    });
  }

  profile = (user) => (
    <>
      <h1>{`Hello, ${user.username}`}</h1>
      <h3>{`${user.email}`}</h3>
    </>
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
          <div className="products">
            {this.productsJSX()}
          </div>
        </Layout>
      </>
    );
  }
}
