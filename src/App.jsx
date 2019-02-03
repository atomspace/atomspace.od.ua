import React, { Component } from "react";
import "./assets/styles/_index.scss";
import { Main, About, Contacts, Edu, Family, Blog, Store } from "./pages";
import { Mentor, Resident } from "./components/Forms";

import Sidebar from "./routes/Sidebar/Sidebar.jsx";
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
  }

  changePage = e => {
    e.preventDefault();
    window.location.href = e.target.href;
    let hash = window.location.hash.replace("#", "");
    this.goToPage(urls.findIndex(url => url === hash));
    // this.setState(state => ({ ...state, currentPage: hash }));
  };

  goToPage = pageNumber => {
    this.refFullPage.fullpageApi.moveTo(pageNumber, 0);
  };

  pageOnChange = (origin, destination, target) => {
    let sidebarRows = [];
    switch (destination.anchor) {
      case urls[0]:
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
        sidebarRows = [];
    }
    this.setState(state => ({
      ...state,
      currentPage: destination.anchor,
      sidebarRows
    }));
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
