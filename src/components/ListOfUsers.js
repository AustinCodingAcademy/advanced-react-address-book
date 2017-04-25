import React from "react";
import PropTypes from "prop-types";
import UserDetails from "./UserDetails";


function ListOfUsers({content}) {
  return (
    <div>
      <p>
        Find a person
      </p>
      {content.map((person) => {
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
