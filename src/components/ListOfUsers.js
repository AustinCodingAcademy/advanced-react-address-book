import React from "react";

import PropTypes from "prop-types";
import UserDetails from "./UserDetails";


function ListOfUsers({content}) {
  return (
    <div>
      <button>
        Find a person
      </button >
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
  content: PropTypes.string.isRequired

};



export default ListOfUsers;
