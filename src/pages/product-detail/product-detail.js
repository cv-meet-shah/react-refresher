import React, { Component } from "react";

import "./product-detail.scss";

export default class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
    };
  }
  componentDidMount() {
    this.setState({
      id: this.props.match.params.id,
    });
  }
  render() {
    return <p>Product Detail Page {this.state.id}</p>;
  }
}
