import React, {Component} from "react";
import propTypes from "prop-types";


class UserDetail extends Component {
  constructor (...args) {
    super(...args);
    this.state = {
      userWasClicked: false
    };
  }

render(){
//  console.log(this.props)
  return (
    <div>

    </div>
  );
}
}

UserDetail.propTypes = {
  userDetail: propTypes.shape({
    first_name: propTypes.string,
    last_name: propTypes.string,
  })
};


export default UserDetail;
