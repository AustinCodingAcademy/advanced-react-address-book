import React, {Component} from "react";
import "./App.css";
import UserDetail from "./UserDetail";

class Button extends Component {
  getInitialState() {
    this.state = {showUserDetail: false};
  }
  onClick() {
    this.setState({ showUserDetail: true});
  }
  render() {
    const userDetail = UserDetail();
    return (
      <div>
        <input type="submit" value="Show" onClick={this.onClick.bind(this)} />
        {this.state.showUserDetail ? <userDetail /> : null}
      </div>
    );

  }
}

export default Button;
