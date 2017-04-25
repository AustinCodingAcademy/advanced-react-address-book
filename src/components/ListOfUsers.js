import React from "react";
import PropTypes from "prop-types";
import UserDetails from "./UserDetails";


function ListOfUsers(props) {
  return (
    <div>
      <p>
        Find a person
      </p>
      {props.content.map((person) => {
        return (
          <UserDetails key={person.id} inner={person} />
        );
      }
        )}
    </div>
  );
}

ListOfUsers.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired

};



export default ListOfUsers;
