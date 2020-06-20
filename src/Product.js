import React, { Component } from "react";
import { Table } from "reactstrap";

export default class Product extends Component {
  render() {
    return (
      <div>
        <h3>Product List</h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>productName</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
