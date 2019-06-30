import React, {Component} from "react";
import "./assets/styles/_index.scss";
import {About, Blog, Contacts, Edu, Family, Main, Store} from "./pages";
import {Mentor} from "./components/Forms/Mentor";
import {Resident} from "./components/Forms/Resident";
import Sidebar from "./routes/Sidebar/Sidebar.jsx";
import ReactFullpage from "@fullpage/react-fullpage";
import BuyForm from "./pages/Store/BuyForm";

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
    userHash: ["#"],
    form: null,
    order: this.getCachedMerch()
  };

  componentDidMount() {
    this.changeDialog(window.location.hash);
    this.handleBack()
  }

  getBack = () => {
    this.setState(state => ({...state, form: null}));
    const preLastUserHash = this.state.userHash[this.state.userHash.length - 2];
    const lastUserHash = this.state.userHash[this.state.userHash.length - 1];
    window.location.hash = preLastUserHash ? preLastUserHash : lastUserHash;
  };

  handleBack = () => {
    window.onpopstate = () => {
      const hash = window.location.hash ? window.location.hash : "#";
      const forms = ['#mentorForm', '#residentForm'];
      const userHash = [...this.state.userHash, hash];
      if (forms.includes(userHash[userHash.length - 2])) {
        this.getBack();
      }
      this.setState({userHash});
    }
  };

  getCachedMerch() {
    return JSON.parse(window.localStorage.getItem("currentMerch"));
  }

  changeDialog(hash) {
    this.setState(state => ({
      ...state,
      form: hash
    }));
  }

  handleDialog = e => {
    this.changeDialog(e.target.hash);
  };

  saveToCache = prop => {
    window.localStorage.setItem(
      "currentMerch",
      JSON.stringify({...this.state.order, ...prop})
    );
  };

  changeMerchAttr = prop => {
    this.saveToCache(prop);
    this.setState({
      order: {...this.state.order, ...prop}
    });
  };

  pageOnChange = (origin, destination) => {
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
          licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
          render={() => {
            return (
              <ReactFullpage.Wrapper>
                <Main handleDialog={this.handleDialog}/>
                <About/>
                <Blog/>
                <Edu/>
                <Family/>
                <Store
                  order={this.state.order}
                  size={this.state.size}
                  changeMerchAttr={this.changeMerchAttr}
                  handleDialog={this.handleDialog}
                  getCachedMerch={this.getCachedMerch}
                />
                <Contacts handleDialog={this.handleDialog}/>
              </ReactFullpage.Wrapper>
            );
          }}
        />
        {this.state.form === "#residentForm" && (
          <Resident closeForm={this.getBack}/>
        )}
        {this.state.form === "#mentorForm" && (
          <Mentor closeForm={this.getBack}/>
        )}
        {this.state.form === "#buyForm" && (
          <BuyForm closeForm={this.getBack} order={this.state.order}/>
        )}
      </div>
    );
  }
}

export default App;
