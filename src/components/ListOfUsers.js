import React, {Component} from "react";
import PropTypes from "prop-types";

class ListOfUsers extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      userWasClicked: false
    };
  }

  handleUserClick(event) {
    console.log("Handle Click", event);

    this.setState({
      userWasClicked: !this.state.userWasClicked
    });
  }

  render() {
    return (
      <div>
        <hr />
        {this.props.arrayOfUsers.map(user => {
          return (
            <p key={user.id} onClick={this.handleUserClick.bind(this)} > {user.firstName} </p>
          );
        })}
      </div>
    );
  }
}

// commented out old functional component once class component was built
// function ListOfUsers(props) {
//   return (
//     <div>
//       <hr />
//       {props.arrayOfUsers.map(user => {
//         return (
//           <p key={user.id}> {user.firstName} </p>
//         );
//       })}
//     </div>
//   );
// }

ListOfUsers.propTypes = {
  arrayOfUsers: PropTypes.array
};

export default ListOfUsers;
