import React from "react";
import PropTypes from "prop-types";
import UserDetail from "./UserDetail.js";

function ListOfUsers(props) {
  const userinfo = props.users.map((item) => {
    return (
      <UserDetail key={item.id} item={item} />
    );
  }

  );

  return (
    <div>
      <ul>
        {userinfo}
      </ul>
    </div>
  );
}


ListOfUsers.propTypes = {
  users: PropTypes.array
};

export default ListOfUsers;







// var Search = React.createClass({
//     getInitialState: function() {
//         return { showResults: false };
//     },
//     onClick: function() {
//         this.setState({ showResults: true });
//     },
//     render: function() {
//         return (
//             <div>
//                 <input type="submit" value="Search" onClick={this.onClick} />
//                 { this.state.showResults ? <Results /> : null }
//             </div>
//         );
//     }
// });
//
// var Results = React.createClass({
//     render: function() {
//         return (
//             <div id="results" className="search-results">
//                 Some Results
//             </div>
//         );
//     }
// });
//
// ReactDOM.render(<Search />, document.getElementById('container'));
