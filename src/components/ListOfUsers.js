import React from "react";
// import PropTypes from "prop-types";
import UserDetail from "./UserDetail";


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
    const userDivs = users.map((user) => {
      return <div onClick={this.handleUserClick.bind(this)} key={user.id}>{user.firstName}</div>;
    });
    return (
      <div>
        <div>
          {userDivs}
          <button onClick={this.handleButtonClick.bind(this)}>{this.state.wasClicked ? "Show" : "Hide"}</button>
        </div>
        <UserDetail user={users[0]} />
      </div>
    );
  }
}

export default ListOfUsers;

// ListOfUsers.propTypes = {
//  user: PropTypes.object.isRequired,
// };
