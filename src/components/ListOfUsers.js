import React from "react";
import PropTypes from "prop-types";
import UserDetail from "./UserDetail.js";
import HideButton from "./HideButton.js";

function ListOfUsers(props) {

  return (
    <div>
      {
        props.users.map((user) => {
          return (
            <HideButton key={user.id} user={user} />
          );
        })
      }
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
