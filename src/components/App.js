import React from "react";
import "./App.css";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import SubHeader from "./SubHeader";
import RightSidebar from "./RightSidebar";
import LeftSidebar from "./LeftSidebar";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Header headerMessage="Address Book:)" />
            <SubHeader />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Main />
          </div>
          <div className="col-md-4">
            <RightSidebar />
          </div>
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default App;
