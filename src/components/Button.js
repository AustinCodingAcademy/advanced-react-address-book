import React from "react";
import UserDetail from "./UserDetail";

const Button = React.createClass({
  getInitialState() {
    return { visible: false };
  },
  onClick() {
    this.setState({ visible: !this.state.visible });
    console.log(this);
  },
  render() {
    return (
      <div>
        <input type="submit" value="Show Details" onClick={this.onClick} />
        { this.state.visible ? {UserDetail} : null }
      </div>
    );
  }
});

export default Button;
