import React from 'react';
import { connect } from 'react-redux';
import {setCurrentUser} from '../actions';

class ListOfUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
    // this.buttonClick = this.buttonClick.bind(this);
    // this.props.SelectUser = this.props.SelectUser.bind(this);
  }

  buttonClick = () => {
    this.setState(prevState => ({
      visible: !prevState.visible
    }));
  }

  render() {

    // filterUsers filters the
    console.log(this.props.searchText);
    var filterUsers = this.props.users.filter((u) => {
      if(this.props.searchText === "") {
        return true;
      };
      if(u.first_name.indexOf(this.props.searchText) > -1) {
        return true;
      } else return false;
    });

    const userDivs = filterUsers.map((user) => {
      if (this.state.visible) {

        return <div key={user.id}>
            {user.first_name}
            <a onClick={ (e) => {e.preventDefault(); this.props.setCurrentUser(user)} }> View </a>
        </div>
      }
      else return <div></div>
    });

    return (
      <div>
        <div>{userDivs}</div>
        <button onClick={this.buttonClick}>{this.state.visible ? 'HIDE' : 'SHOW'}</button>

      </div>
    )
  }
}

  function mapStateToProps(state) {
    return {
      users: state.users,
      searchText: state.searchText
    }
  }

  function mapDispatchToProps(dispatch){
   return {
     setCurrentUser:function(user){
       dispatch(setCurrentUser(user));
     }
   }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(ListOfUsers);;


// export default ListOfUsers;
