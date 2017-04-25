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
      <Header headerMessage="I'm a Header!" />
      <SubHeader />
      <RightSidebar />
      <LeftSidebar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
