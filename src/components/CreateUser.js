import React from "react";

class CreateUser extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            address: "",
            phone: "",
            occupation: ""
        };
    }

    createInput(label, prop) {
        return (
            <div>
                <label>{label}</label>
                <input
                    type="text"
                    value={this.state[prop]}
                    onChange={
                        (e) => {
                            var s = {};
                            var propname = prop;
                            s[propname] = e.target.value
                            this.setState(s);
                        }
                    }
                    name={prop}
                />
            </div>
        );
    }

    render() {
        return(
            <div>
                <form>
                    { this.createInput("First Name", "firstName") }
                    { this.createInput("Last Name", "lastName") }
                    { this.createInput("Address", "address") }
                    { this.createInput("Phone", "phone") }
                    { this.createInput("Occupation", "occupation") }

                    
                    <div>
                        <input type="submit" value="Submit" onClick={
                            (e) => {
                                e.preventDefault();
                                console.log(this.state);
                                
                            }
                        }
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateUser;