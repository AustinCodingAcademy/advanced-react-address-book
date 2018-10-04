import React from "react";
import "./App.css";

class Oxford extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: ""
    };
  }
  searchHandler(event) {
    this.setState({
      word: event.target.value
    });
  }
  render() {
    return (
      <div>
        <input
          className="searchBox"
          name="Search"
          type="text"
          value={this.state.word}
          onChange={(event) => this.searchHandler(event)}
        />
        <p className="App-intro">
          Hallo
        </p>
      </div>
    );
  }
}

export default Oxford;
