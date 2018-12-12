import React, { Component } from "react";
import Author from "./Author";

class Authors extends Component {
  render() {
    return (
      <ul>
        { this.props.authors.map(function(a) {
          return (
            <Author cover={ a.img } name={ a.author.name } />
          );
        }) }
      </ul>
    );
  }
}

export default Authors;
