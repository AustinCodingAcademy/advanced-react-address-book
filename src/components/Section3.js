import React from "react";

function Section3(props) {
  return (
    <div className="Section-content">
      <p>
        {props.user.firstName} {props.user.lastName}
      </p>
    </div>
  );
}

export default Section3;
