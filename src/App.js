import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Category from "./Category";
import Product from "./Product";
import Navigate from "./Navigate";

export default class App extends Component {

  state={currentCategory :""}

  changeCategory = (category) => {
    this.setState({currentCategory:category.categoryName})
  };

  render() {

    let productInfo={title:"Product List"}
    let categoryInfo={title:"Category List"}

    return (
      <div className="App">
        <Container>
          <Row>
            <Navigate></Navigate>
          </Row>
          <Row>
            <Col xs="3">
              <Category currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo}></Category>
            </Col>
          
            <Col xs="9">
              <Product info={productInfo}></Product>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
