import React from 'react';
import { connect } from 'react-redux';


function UserDetail(props) {
  return <div>
    <h1>{props.selectedUser.first_name} {props.selectedUser.last_name}</h1>
    <div>{props.selectedUser.address}</div>
    <div>{props.selectedUser.phone}</div>
    <div>{props.selectedUser.occupation}</div>
    <div><img src={props.selectedUser.avatar} alt="" /></div>
  </div>
}

function mapStateToProps(state) {
  return {
    selectedUser: state.selectedUser
  }
}

var otherFunction = connect(mapStateToProps);
const UserDetailContainer = otherFunction(UserDetail);
export default UserDetailContainer
// export default UserDetail;
