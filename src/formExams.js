import React, { Component } from "react";
import alertify from "alertifyjs";

export default class formExams extends Component {
  state = {
    username: "",
  };

  onChangeHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    //alert(this.state.username);
    alertify.success("Sen kimsim ? " + this.state.username,2);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <input onChange={this.onChangeHandler} type="text"></input>
          <h3> {this.state.username}</h3>
          <input type="submit" value="Kaydet"></input>
        </form>
      </div>
    );
  }
}
