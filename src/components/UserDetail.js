import React from "react";
import UserInfo from "./UserInfo";

function UserDetail(props) {

    // whoever uses userdetail better have provided a user on props
    const {user} = props;
    const {first_name, last_name, occupation, phone,address, avatar} = user;
    return (
        <div>
            <UserInfo />
        </div>
    );
}

export default UserDetail;