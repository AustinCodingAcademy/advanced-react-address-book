import React from "react";
import "./App.css";

const UserDetail = React.createClass({
  getInitialState: function () {
    return {
      value: "Hide",
      hide: true
    };
  },
  changeButtonText() {
    this.setState({
      hide: !this.state.hide
    });
    if (this.state.hide) {
      this.setState({
        value: "Hide"
      });
    } else {
      this.setState({
        value: "Show"
      });
    }
  },
  render() {
    return (
      <div>
        <button onClick={() => this.changeButtonText()}>
          {this.state.value}
        </button>
      </div>
    );
  }
});

export default UserDetail;
