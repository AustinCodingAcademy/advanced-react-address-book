import React, {Component} from "react";  // default component is without brackets
import propTypes from "prop-types";
import UserDetail from "./UserDetail";

class ListOfUsers extends Component {
  constructor(...args) {  // or   constructor(props)
    super(...args);  // or super(props)
    this.state = {
      userWasClicked: false,



    };
  }  // end of constructor

  handleUserClick(event) {
    console.log("Handle click",  event);
console.log("the id is:  ",event.id)
    this.setState({
      userWasClicked: !this.state.userWasClicked
    });
  }  // end of click handler


  render() {

    return (
      <div >
        <hr />
        {this.props.userNames.map((userNames,x) => {
          return (
            <p key={userNames.id} onClick={this.handleUserClick.bind(this, this.props.userNames[x])}>
              {this.props.userNames[x].first_name}
              {this.props.userNames[x].last_name}
              {this.props.userNames[x].id}</p>
          );// end of return;
        }) // end of map function
      } // end of display usernames
  <UserDetail num={this.props.userNames} />
      </div>
    );
  }
}

ListOfUsers.propTypes = {
  userNames: propTypes.array,
};

export default ListOfUsers;
