import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class Category extends Component {
  state = { categories: [] };
  componentDidMount() {
    this.getCategories();
  }
  getCategories = () => {
    let url = "http://localhost:3000/categories";
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ categories: data }));
  };


  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem  active={this.props.currentCategory===category.categoryName?true:false}
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h4>{this.props.currentCategory}</h4>
      </div>
    );
  }
}
