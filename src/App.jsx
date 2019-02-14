import React, { Component } from "react";
import "./assets/styles/_index.scss";
import { Main, About, Contacts, Edu, Family, Blog, Store } from "./pages";
import { Mentor, Resident } from "./components/Forms";

import Sidebar from "./routes/Sidebar/Sidebar.jsx";
import ReactFullpage from "@fullpage/react-fullpage";

export const urls = [
  "main",
  "about",
  "edu",
  "blog",
  "family",
  "store",
  "contacts"
];

class App extends Component {
  state = {
    currentPage: "main",
    order: {
      name: "i-need-more-space",
      size: "L"
    }
  };

  changeMerchAttr = prop => {
    this.setState({
      order: { ...this.state.order, ...prop }
    });
  };

  pageOnChange = (origin, destination, target) => {
    this.setState(state => ({
      ...state,
      currentPage: destination.anchor
    }));
  };

  render() {
    return (
      <div>
        <Sidebar
          pageName={this.state.currentPage}
          changeMerchAttr={this.changeMerchAttr}
          order={this.state.order}
        />
        <ReactFullpage
          anchors={urls}
          onLeave={this.pageOnChange}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <Main />
                <About />
                <Edu />
                <Blog />
                <Family />
                <Store
                  size={this.state.size}
                  changeMerchAttr={this.changeMerchAttr}
                />
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
