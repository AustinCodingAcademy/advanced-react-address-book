import React, {Component} from "react";
import UserDetail from "./UserDetail";

class ListOfUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailVisible: true,
      listVisible: true,
      searchText: "",
      users: props.users,
      currentUser: props.currentUser,
    };
  }

  toggleShow = () => {
    if (this.state.detailVisible === true) {
      this.setState({detailVisible: false});
    } else {
      this.setState({detailVisible: true});
    }
  }

  toggleList = () => {
    if (this.state.listVisible === true) {
      this.setState({listVisible: false});
    } else {
      this.setState({listVisible: true});
    }
  }

  searching = (e) => {
    this.setState({searchText: e.target.value});
  }

  render() {
    const current = this.state.users[this.props.currentUser];
    return (
      <div>
        <div id="search">
          <input
            type="text"
            value={this.state.searchText}
            onChange={this.searching}
            placeholder="search here..." />
          <button id="go" onClick={this.props.selectUser}>Go</button>
        </div>
        <div hidden={!this.state.listVisible}>
          {this.state.users.map((user, i) =>
            <div key={i}>
              <p key={i}> {user.first_name}
                <button id="view" onClick={() => {this.props.selectUser(user.id-1)}}>View Detail</button>
              </p>
            </div>
          )}
        </div>
        <button id="button" onClick={this.toggleList}>Hide/Show</button>
        <br />
        <div className="detail" hidden={!this.state.detailVisible}>
          <UserDetail current={current} />
        </div>
        <button id="button" onClick={this.toggleShow}>Hide/Show</button>
      </div>
    );
  }
}

export default ListOfUsers;
