import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Category from "./Category";
import Product from "./Product";
import Navigate from "./Navigate";

export default class App extends Component {
  state = { currentCategory: "", products: [] };

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id)
  };

  componentDidMount() {
    this.getProducts();
  }
  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";

     if (categoryId) {
       url += "?categoryId=" + categoryId;
       console.log(url)
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  render() {
    let productInfo = { title: "Product List" };
    let categoryInfo = { title: "Category List" };

    return (
      <div className="App">
        <Container>
          <Row>
            <Navigate></Navigate>
          </Row>
          <Row>
            <Col xs="3">
              <Category
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              ></Category>
            </Col>

            <Col xs="9">
              <Product
                info={productInfo}
                products={this.state.products}
              ></Product>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
