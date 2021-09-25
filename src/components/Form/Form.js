import React from "react";

// Styles
import "./Form.style.css";

// Button
import Button from "../Button/Button";

class Form extends React.Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = { value: "", disabled: false };
    this.textInput = React.createRef();
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });

    event.target.value === "реакт"
      ? this.setState({ disabled: true })
      : this.setState({ disabled: false });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleClick = () => {
    this.textInput.current.focus();
  };

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return (
      <div className="form__wrapper">
        <div className="form__header">React form</div>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form__group">
            <input
              className="form__input"
              value={this.state.value}
              onChange={this.handleChange}
              ref={this.textInput}
            ></input>
          </div>
          <div className="form__group">
            <Button
              type="submit"
              disabled={this.state.disabled}
              text="Button submit"
            />
          </div>
          <div className="form__group">
            <Button
              onClick={this.handleClick}
              type="button"
              disabled={false}
              text="Button focus"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
