import React from "react";
import "./App.css";
import users from "../users";

class ListOfUsers extends React.Component {
  constructor() {
    super();
    this.state = {
      Users: users,
      visible: "",
      searchText: ""
    };
  }
  searchHandler() {
    this.setState({
      searchText: event.target.value
    });
  }
  render() {
    return (
      <input
        className="searchBox"
        name="Search"
        type="text"
        value={this.state.searchText}
        onChange={(event) => this.searchHandler(event)}
      />
    );
  }
}

export default ListOfUsers;
