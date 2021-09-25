import React from "react";

// Styles
import "./Button.style.css";

class Button extends React.Component {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        className="btn"
        type={this.props.type}
        disabled={this.props.disabled}
      >
        <span>{this.props.text}</span>
      </button>
    );
  }
}

export default Button;
