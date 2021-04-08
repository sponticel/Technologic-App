import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Layout from "../../components/shared/Layout/Layout"

export default class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.user = props.user
  }

  profile = (user) => (
    <>
      <h1>{`Hello, ${user.username}`}</h1>
      <h3>{`${user.email}`}</h3>
    </>
  )
  
  render() {
    return (
      <>
        <Layout user={this.user}>
          {this.user ? this.profile(this.user) : 'Maybe create an account.'}
        </Layout>
      </>
    );
  }
}