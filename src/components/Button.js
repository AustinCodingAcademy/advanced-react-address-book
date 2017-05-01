import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

const Button = React.createClass({
  getInitialState() {
    return { visible: false };
  },
  onClick() {
    this.setState({ visible: !this.state.visible});
  },
  render() {
    return (
      <div>
        <input type="submit" value="Show Details" onClick={this.toggle} />
        {this.state.visible ? <fuserDetail /> : null}
        <div className={this.state.visible ? "some-content" : ""}>Hi there!</div>
      </div>
    );
  }
});

export default Button;
