import React from "react";

import "./Card.scss";

class Card extends React.Component {
  render() {
    return (
      <div
        className={`card ${this.props.className}`}
        style={this.props.customStyle}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Card;
