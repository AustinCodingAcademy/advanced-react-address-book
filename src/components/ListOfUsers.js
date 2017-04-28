import React from "react";

class ListOfUsers extends React.Component {
    constructor(props) {
        super();
        this.state = {
            visible: true,
            searchText: "",
        };
    }

    render() {
        var userDivs = "";
        if(this.state.visible) {
            userDivs = this.props.users.map(function(user, index) {
                return (
                    <div>
                        <div key={index}>
                            {user.first_name}
                            <a onClick={
                                (e) => {
                                    console.log("hello");
                                }
                            }>View</a>
                        </div>
                    </div>
                    );
            });
        } else {
            userDivs = "";
        }

        return (
            <div>
                <label for="search">Search</label>
                <input id="search" type="text" value={this.state.searchText} onChange={
                    (e) => {
                        this.setState({
                            searchText: e.target.value
                        });
                    }
                }
                />

                <button onClick={
                    (e) => {
                        this.setState(
                            {
                                visible: !this.state.visible
                            }
                        );
                    }
                }>
                </button>
                {userDivs}
            </div>
        );
    }
    
}


export default ListOfUsers;