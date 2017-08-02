import React from "react";

class ListOfUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  render() {
    const userDiv = this.props.users.map(user => <div key={user.id}>{user.first_name}</div>);
    
    return (
      <div>
        {userDiv}
        <button onClick={
            function() {
              this.state.visible = !this.state.visible;
            }
          }>
          Hide
        </button>
      </div>
    );
  }
}

export default ListOfUsers;
