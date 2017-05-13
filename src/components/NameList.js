import React from "react";
import PropTypes from "prop-types";


function NameList(props) {

  const AlphaName = [];
  function AddNames() {
    props.users.map((item) => {
      AlphaName.push(item.lastName);
    }
    );
  }

  AddNames();

  return (
    <div>
      {AlphaName.sort()}
    </div>
  );
}







NameList.propTypes = {
  users: PropTypes.array,
  alphabet: PropTypes.array
};

export default NameList;
