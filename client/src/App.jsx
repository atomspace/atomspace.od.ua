import React, { Component } from "react";
import "./assets/styles/_index.scss";
import { Main, About, Contacts, Edu, Family, Blog, Store } from "./pages";
import { Mentor } from "./components/Forms/Mentor";
import { Resident } from "./components/Forms/Resident";

import Sidebar from "./routes/Sidebar/Sidebar.jsx";
import ReactFullpage from "@fullpage/react-fullpage";
import BuyForm from "./pages/Store/BuyForm";
import {MEDIA_URL} from './utils/config';

export const urls = [
  "main",
  "about",
  "blog",
  "edu",
  "family",
  "store",
  "contacts"
];

class App extends Component {
  state = {
    currentPage: "main",
    form: null,
    order: {
    }
  };
  closeForm = () => {
    this.setState(state => ({ ...state, form: null }));
    window.location.hash = "";
  };
  changeDialog(hash) {
    this.setState(state => ({
      ...state,
      form: hash
    }));
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
      console.log(MEDIA_URL)
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
          licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <Main handleDialog={this.handleDialog} />
                <About />
                <Blog />
                <Edu />
                <Family />
                <Store
                  order={this.state.order}
                  size={this.state.size}
                  changeMerchAttr={this.changeMerchAttr}
                  handleDialog={this.handleDialog}
                />
                <Contacts handleDialog={this.handleDialog} />
              </ReactFullpage.Wrapper>
            );
          }}
        />
        {this.state.form === "#residentForm" && (
          <Resident closeForm={this.closeForm} />
        )}
        {this.state.form === "#mentorForm" && (
          <Mentor closeForm={this.closeForm} />
        )}
        {this.state.form === "#buyForm" && (
          <BuyForm closeForm={this.closeForm} order={this.state.order} />
        )}
      </div>
    );
  }
}

export default App;
