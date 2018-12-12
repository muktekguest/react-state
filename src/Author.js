import React, { Component } from "react";

class Author extends Component {
  render() {
    return (
      <li><a href={ this.props.cover }>{ this.props.name }</a></li>
    );
  }
}

export default Author;
