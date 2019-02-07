import React, { Component } from "react";
import "./assets/styles/_index.scss";
import { Main, About, Contacts, Edu, Family, Blog, Store } from "./pages";
import { Mentor, Resident } from "./components/Forms";

import Sidebar from "./routes/Sidebar/Sidebar.jsx";
import ReactFullpage from "@fullpage/react-fullpage";

export const urls = ["main", "about", "edu", "blog", "family", "store", "contacts"];

class App extends Component {
  state = {
    currentPage: "main"
  };
  refFullPage = null;
  reactPageScroller = null;

  pageOnChange = (origin, destination, target) => {
    
    this.setState(state => ({
      ...state,
      currentPage: destination.anchor,
    }));
  };

  render() {
    return (
      <div>
        <Sidebar
          pageName={this.state.currentPage}
        />
        <ReactFullpage
          anchors={urls}
          onLeave={this.pageOnChange}
          ref={r => (this.refFullPage = r)}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <Main />
                <About />
                <Edu />
                <Blog />
                <Family />
                <Store />
                <Contacts />
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    );
  }
}

export default App;
