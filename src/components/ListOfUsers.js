import React from 'react';
import SelectUser from '../index.js';

class ListOfUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleOn: true,
      searchText: ''
    };

    // this.buttonClick = this.buttonClick.bind(this);
    // this.props.SelectUser = this.props.SelectUser.bind(this);
  }

  buttonClick = () => {
    this.setState(prevState => ({
      toggleOn: !prevState.toggleOn
    }));
  }

  userSelected = (chosenOne) => {
    console.log(chosenOne);
    SelectUser(chosenOne)
  }

  changeInput(event) {
    event.preventDefault();
    this.setState({
      searchText: event.target.value
    })
  };

  render() {
    const userDivs = this.props.users.map((user) => {
      if (this.state.toggleOn) return <div key={user.id}>{user.first_name}</div>;
      else return <div></div>
    })

    return (
      <div>
        <input label='Search' placeholder="search" onChange={this.changeInput}/>
        <div onClick={this.userSelected}>{userDivs}</div>
        <button onClick={this.buttonClick}>{this.state.toggleOn ? 'HIDE' : 'SHOW'}</button>
      </div>
    )
  }

}

export default ListOfUsers;
