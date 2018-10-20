import React from "react";
import UserDetail from "./UserDetail";

class UserDivs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  handleUserClick(event) {
    const users = this.props.props;
    console.log("user", event, users);
    this.setState({
      idOfUser: this.id,
    });
  }
  render() {
    const users = this.props.props;
    console.log("i got props", users);
    const userD = users.map((user, index) => {
      return <div onClick={this.handleUserClick.bind(this)} key={index}>{user.firstName}</div>;
    });
    console.log("userD", userD[1]);
    return (
      <div>
        {userD}
        <UserDetail user={users[0]} />
      </div>
    );
  }
}
export default UserDivs;
