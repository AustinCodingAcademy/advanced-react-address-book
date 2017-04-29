import React from "react";
// import PropTypes from "prop-types";
import UserDetail from "./UserDetail";
import UserDivs from "./UserDivs";


class ListOfUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wasClicked: false,
      visible: false,
    };
  }
  handleButtonClick(event) {
    console.log("handle click", event);
		
    this.setState({
      wasClicked: !this.state.wasClicked,
    });
  }
  handleUserClick(event) {
    console.log("user", event, this);
//    this.setState({
//      idOfUser: this.id,
//    });
  }
  render() {
    const users = this.props.users;
    return (
      <div>
        <div>
          <button onClick={this.handleButtonClick.bind(this)}>{this.state.wasClicked ? "Hide" : "Show"}</button>
          {this.state.wasClicked && <UserDivs props={users} />}
        </div>
      </div>
    );
  }
}

export default ListOfUsers;

// ListOfUsers.propTypes = {
//  user: PropTypes.object.isRequired,
// };

// <UserDivs />
