import React from 'react';
// import SelectUser from './index.js';

class ListOfUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleOn: true,
      searchText: ''
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      toggleOn: !prevState.toggleOn
    }));
  }

  changeInput(event) {
    event.preventDefault();
    this.setState({
      searchText: event.target.value
    })
  };

  render() {
    const userDivs = this.props.users.map((user) => {
      if (this.state.toggleOn) return <li>{user.first_name}</li>;
      else return <div></div>
    })

    return (
      <div>
        <input label='Search' placeholder="type here" onChange={this.changeInput}/>
        <ul onClick={this.props.SelectUser}>{userDivs}</ul>
        <button onClick={this.handleClick}>{this.state.toggleOn ? 'HIDE' : 'SHOW'}</button>
      </div>
    )
  }

}

export default ListOfUsers;
