import React from 'react';

// I need props to have a property called users
// and it needs to be an array of user objects

class ListofUsers extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: true,
      searchText: "",
    };
  }
  render() {
    const users = this.props.users;
    let userDivs = "";
    if (this.state.visible) {
      userDivs = users.map(function (user, i) {
        return <div key={i}> {user.first_name} </div>;
      });
    }
    else{
      userDivs = "";
    }

    return (
      <div className="ListofUsers">
        <input
         onChange={
           (e) => {
             this.setState({
             searchText: e.target.value
            });
           }
         }
        value={this.state.searchText}>
        </input>
      <button onClick={
        (e) => {
          var state = {
            visible: !this.state.visible
          };
          this.setState(state);
        }
      }

      type="button">Hide</button>
      {userDivs}
      </div>
    );
  }
}

// same thing as HW 1, importing map function as a variable.

export default ListofUsers;
