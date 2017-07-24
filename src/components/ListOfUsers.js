import React from 'react';
import SelectUser from '../index.js';

class ListOfUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      searchText: ''
    };

    // this.buttonClick = this.buttonClick.bind(this);
    // this.props.SelectUser = this.props.SelectUser.bind(this);
  }

  buttonClick = () => {
    this.setState(prevState => ({
      visible: !prevState.visible
    }));
  }

  userSelected = (chosenOne) => {
    console.log(chosenOne);
    // SelectUser(chosenOne)
  }

  changeInput(event) {
    event.preventDefault();
    this.setState({
      searchText: event.target.value
    })
  };

  render() {
    const userDivs = this.props.users.map((user) => {
      if (this.state.visible) return <div key={user.id} onClick={this.userSelected(user)}>{user.first_name}</div>;
      else return <div></div>
    })

    return (
      <div>
        <input label='Search' placeholder="search" onChange={this.changeInput}/>
        <div>{userDivs}</div>
        <button onClick={this.buttonClick}>{this.state.visible ? 'HIDE' : 'SHOW'}</button>
      </div>
    )
  }

}

export default ListOfUsers;
