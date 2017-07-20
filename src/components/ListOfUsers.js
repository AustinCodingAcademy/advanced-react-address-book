import React from 'react';

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
    // event.preventDefault();
    this.setState({
      searchText: event.target.value
    })
  }

  render() {
    const userDivs = this.props.users.map((user) => {
      if (this.state.toggleOn) return <div>{user.first_name}</div>;
      else return <div></div>
    })

    return (
      <div>
        <input label='Search' placeholder="type here" onChange={this.changeInput}/>
        {userDivs}
        <button onClick={this.handleClick}>{this.state.toggleOn ? 'HIDE' : 'SHOW'}</button>
      </div>
    )
  }

}

export default ListOfUsers;
