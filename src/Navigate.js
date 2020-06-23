import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";

export default class Navigate extends Component {
  constructor(props) {
    super(props);

    this.toogle = this.toogle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toogle() {
    this.setState({
      isOpen: this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/">Anasayfa</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="form1">Form</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="product">Ürün Detay</Link>
                </NavLink>
              </NavItem>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
        <hr />
      </div>
    );
  }
}
