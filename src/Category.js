import React, { Component } from "react";
import { ListGroup, ListGroupItem} from "reactstrap";

export default class Category extends Component {
    state={ categories :[
    { categoryId: 1, categoryName: "Konya" },
    { categoryId: 2, categoryName: "Ankara" },
    { categoryId: 3, categoryName: "İstanbul" },
    { categoryId: 4, categoryName: "Bursa" },
  ]};
 

  render() {
    return (
      <div>
          <h3>{this.props.info.title}</h3>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              onClick={() => this.props.changeCategory(category)}
              key={category.categoryId}
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
