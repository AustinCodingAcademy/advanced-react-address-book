import React, {Component} from "react";
import PropTypes from "prop-types";
import "./App.css";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {showUserDetail: false, value: "Show"};
  }

  handleClick() {
    this.setState(prevState => ({showUserDetail: !prevState.showUserDetail}));
    document.getElementById("container-" + this.props.user.id).classList.toggle("active");

    if (this.state.showUserDetail) {
      this.setState({value: "Show"});
    } else {
      this.setState({value: "Hide"});
    }
  }

  render() {
    return (
      <div>
        <input type="submit" value={this.state.value} onClick={this.handleClick.bind(this)} />
        {this.state.showUserDetail ?
          <div className="user-detail">
            <p>hello</p>
            <p>{this.props.user.address}</p>
            <p>{this.props.user.phone}</p>
            <p>{this.props.user.occupation}</p>
          </div> : null }
      </div>
    );

  }
}

export default Button;

Button.propTypes = {
  user: PropTypes.object.isRequired
};
