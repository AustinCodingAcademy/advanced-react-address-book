import React, {Component} from "react";
import PropTypes from "prop-types";

class ListOfUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClicked: false
    };
  }

  handleUserClick(event) {
    console.log("Handle Click", event);

    this.setState({
      buttonClicked: !this.state.buttonClicked
    });
  }

  render() {
    if (!this.state.buttonClicked) {
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
    return (
      <div>
        <button onClick={this.handleUserClick.bind(this)}>
          {this.state.buttonClicked ? "Show Names" : "Hide Names"}
        </button>
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
  arrayOfUsers: PropTypes.array.isRequired
};

export default ListOfUsers;
