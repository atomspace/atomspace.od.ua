import React, { Component } from "react";
import logo from "./logo.svg";
import "./assets/styles/_index.scss";
import { Main, About, Contacts, Edu, Family, Blog, Store } from "./pages";
import { Mentor, Resident } from "./components/Forms";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidebar from "./routes/Sidebar/Sidebar.jsx";

const urls = {
  main: "/",
  about: "/about/",
  blog: "/blog/",
  edu: "/edu/",
  family: "/family/",
  store: "/store/",
  contacts: "/contacts/"
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      sidebarRows: []
    };
  }
  getCurrentPageName = () => {
    const loc = window.location.pathname;
    console.log(loc);
    // if (this.getCurrentPageName() === "/") {
    //   console.log(this.getSidebarData());
    //   this.setState({ sidebarRows: this.getSidebarData() });
    // }
    let location = loc.replace(/\//g, "");
    
    this.setState({ sidebarRows: this.getSidebarData(loc) });
    if (loc === "/") {
      location = "/";
      return "main"
    }
    return location;
  };

  shouldComponentUpdate(prevProps, prevState) {
    if (
      JSON.stringify(prevState.sidebarRows) !==
      JSON.stringify(this.state.sidebarRows)
    ) {
      return true;
    }
    return false;
  }

  getSidebarData = type => {
    switch (type) {
      case urls.main:
        return [
          {
            title: "Стать ментором",
            link: "/mentor/form/"
          },
          {
            title: "Стать резидентом",
            link: "/resident/form/"
          }
        ];
      case urls.store:
        return [
          {
            title: "SIZE S M L XL"
          },
          {
            title: "BUY: 600UAH"
          }
        ];
      case urls.contacts:
        return [
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
      default:
        return [];
    }
  };

  render() {
    return (
      <Router>
        <div className="container">
          <Sidebar
            sidebarRows={this.state.sidebarRows}
            pageName={this.getCurrentPageName.bind(this)}
          />
          <div className="components">
            <Route path="/" exact component={() => <Main />} />
            <Route path="/about/" component={About} />
            <Route path="/blog/" component={Blog} />
            <Route path="/contacts/" component={Contacts} />
            <Route path="/edu/" component={Edu} />
            <Route path="/family/" component={Family} />
            <Route path="/mentor/form/" component={Mentor} />
            <Route path="/store/" component={Store} />
            <Route path="/resident/form/" component={Resident} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
