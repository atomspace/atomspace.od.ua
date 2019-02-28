import React, { Component } from "react";
import "./assets/styles/_index.scss";
import { Main, About, Contacts, Edu, Family, Blog, Store } from "./pages";
import { Mentor } from "./components/Forms/Mentor";
import { Resident } from "./components/Forms/Resident";

import Sidebar from "./routes/Sidebar/Sidebar.jsx";
import ReactFullpage from "@fullpage/react-fullpage";
import Form from "./components/Forms/Form";
// import { Resident, Mentor } from "./components/Forms";

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
    form: null,
    order: {
      name: "i-need-more-space",
      size: "L"
    }
  };
  closeForm = () => {
    console.log("Close");
    this.setState(state => ({ ...state, form: null }));
    console.log(window.location);
    window.location.hash = "";
  };
  changeDialog(hash) {
    if (hash === "#residentForm") {
      this.setState(state => ({ ...state, form: "resident" }));
    } else if (hash === "#mentorForm") {
      this.setState(state => ({ ...state, form: "mentor" }));
    } else {
      this.setState(state => ({ ...state, form: null }));
    }
  }
  handleDialog = e => {
    this.changeDialog(e.target.hash);
  };
  componentDidMount() {
    this.changeDialog(window.location.hash);
  }
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
          handleDialog={this.handleDialog}
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
        {this.state.form === "resident" && (
          <Form pageName={this.state.form} closeForm={this.closeForm}>
            <Resident closeForm={this.closeForm} />
          </Form>
        )}
        {this.state.form === "mentor" && (
          <Form pageName={this.state.form} closeForm={this.closeForm}>
            <Mentor closeForm={this.closeForm} />
          </Form>
        )}
      </div>
    );
  }
}

export default App;
