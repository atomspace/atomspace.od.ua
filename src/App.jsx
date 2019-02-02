import React, { Component } from "react";
import logo from "./logo.svg";
import "./assets/styles/_index.scss";
import { Main, About, Contacts, Edu, Family, Blog, Store } from "./pages";
import { Mentor, Resident } from "./components/Forms";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidebar from "./routes/Sidebar/Sidebar.jsx";
import ReactPageScroller from "react-page-scroller";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

const urls = ["main", "about", "edu", "blog", "family", "store", "contacts"];

class App extends Component {
  state = {
    sidebarRows: [],
    currentPage: "main"
  };
  refFullPage = null;
  reactPageScroller = null;

  goToInitialPage = () => {
    const hash = window.location.hash.replace("#", "");
    this.goToPage(urls.findIndex(url => url === hash) + 1);
  };

  componentWillMount() {
    setTimeout(() => {
      this.goToInitialPage();
    }, 1000);
  };

  changePage = e => {
    e.preventDefault();

    window.location.href = e.target.href;
    let hash = window.location.hash.replace("#", "");
    console.log(hash);
    this.goToPage(urls.findIndex(url => url === hash));
    // this.setState(state => ({ ...state, currentPage: hash }));
  };

  goToPage = pageNumber => {
    console.log(pageNumber);
    this.refFullPage.fullpageApi.moveTo(pageNumber, 0);
  };

  pageOnChange = (origin, destination, target) => {
    let sidebarRows = [];
    // console.log(urls[number - 1]);
    // console.log(urls[0]);
    // if(urls[number - 1] === 'main'){
    //   sidebarRows = [
    //     {
    //       title: "Стать ментором",
    //       link: "#mentorForm",
    //     },
    //     {
    //       title: "Стать резидентом",
    //       link: "#residentForm",
    //     }
    //   ];
    // }
    console.log(sidebarRows);

    switch (destination.anchor) {
      case urls[0]:
        console.log(urls[0]);
        console.log(destination.anchor);
        sidebarRows = [
          {
            title: "Стать ментором",
            link: "mentorForm"
          },
          {
            title: "Стать резидентом",
            link: "#residentForm"
          }
        ];
        break;
      case urls[5]:
        sidebarRows = [
          {
            title: "SIZE S M L XL"
          },
          {
            title: "BUY: 600UAH"
          }
        ];
        break;        
      case urls[6]:
        sidebarRows = [
          {
            title: "+380 73 139 57 87"
          },
          {
            title: "info@atomspace.od.ua"
          },
          {
            title: "г. Одесса, Обсерваторный переулок, 2/6"
          }
        ];
        break;        
      default:
        console.log("default");
        sidebarRows = [];
    }
    this.setState(state => ({
      ...state,
      currentPage: destination.anchor,
      sidebarRows
    }));
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Sidebar
          sidebarRows={this.state.sidebarRows}
          pageName={this.state.currentPage}
          changePage={this.changePage}
        />
        <ReactFullpage
          anchors={urls}
          onLeave={this.pageOnChange}
          ref={r => (this.refFullPage = r)}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <Main />
                </div>
                <div className="section">
                  <About />
                </div>
                <div className="section">
                  <Edu />
                </div>
                <div className="section">
                  <Blog />
                </div>
                <div className="section">
                  <Family />
                </div>
                <div className="section">
                  <Store />
                </div>
                <div className="section">
                  <Contacts />
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    );
  }
}

export default App;
