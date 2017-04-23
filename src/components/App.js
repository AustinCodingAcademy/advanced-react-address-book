import React from "react";
// import logo from "./logo.svg";   moved to Header.js
import "./App.css";
import Body from './Body.js';
import Footer from './footer.js';
import Header from './Header.js';
// import Component1 from './component1.js';
// import Component2 from './component2.js';
// import Component3 from './component3.js';
// import Component4 from './component4.js';
// import Component5 from './component5.js';
// import Component6 from './component6.js';
import ListOfUsers from './ListOfUsers.js';
//import UserDetail from './UserDetail.js';


// function ComponentX() {
//   return (
//     <h3> Texas </h3>
//   );
// }


function App(props) {
  const userItems=props.users.map(function(users, index) {
    return (
      <div>
        {users.first_name} {users.last_name}
      </div>
    );  // end of return for MAP function
  });
  const userItems2=props.users.map(function(users, index) {
    return (
      <div key = {index}>
        {users.address}
      </div>
    );  // end of return for MAP function

  });  // end of APP fucntion

  console.log(userItems2);
  console.log(userItems);
  return (
    <div className="App">
      <Header name="Nick" />
      <Body />{/* className = App-intro */}
      {/* <Component1/>
      // <Component2/>
      // <Component3/>
      // <Component4/>
      // <Component5/>
      // <Component6/>
         <ComponentX/>
    <UserDetail  />
         */}
      <ListOfUsers userItems={userItems} userItems2={userItems2}  />

      <Footer /> {/* Footer location*/}
    </div>

  );
}

export default App;
