import React from "react";

class ListOfUsers extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      visible: true,
      searchText: "",
    }
  }

  handleClickBtn = () => {
    this.setState(prevState => {
      return {
        visible : !prevState.visible,
      }
    });
  }
  handleSearchBox = (event) => {
    this.setState({
      searchText : event.target.value,
    });
  }

  render() {
    // console.log(this.state.searchText);
    const userDivs = this.props.users.map(user => {
      if(this.state.visible) {
        return (
          <div key={user.id}>
            {user.first_name}
            <a href="#" onClick={
                () => {
                  this.props.selectUser(user);
                }
              }>View</a>
          </div>);
      }
    });

    return (
      <div>
        <input label="Search" autoFocus onChange={this.handleSearchBox}/>
        {userDivs}
        <button onClick={this.handleClickBtn}>
          {this.state.visible ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}

export default ListOfUsers;
