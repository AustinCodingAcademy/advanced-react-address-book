import React from "react";

function UserInfo(props) {
    console.log('userinfoprops', props);
      debugger;

    let users = props.test;
    let userDivs = users.map(function(user, index) {
        return <ul key={index}>
                    <li>
                        {user.first_name} - {user.last_name}<br />
                        {user.address}<br />
                        {user.phone}
                    </li>
                </ul>
    });

    return (
        <div>
            {userDivs}
        </div>
    );
}

export default UserInfo;