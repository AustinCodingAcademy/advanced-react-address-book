import React, { Component } from "react";
import "./App.css";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import SubHeader from "./SubHeader";
import RightSidebar from "./RightSidebar";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header headerMessage="Address Book:)" />
        <SubHeader />
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <Main />
            </div>
            <div className="col-md-4">
              <RightSidebar />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
