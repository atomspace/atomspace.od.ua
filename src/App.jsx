import React, { Component } from "react";
// import logo from "./logo.svg";
import "./assets/styles/_index.scss";
import { Main, About, Contacts, Edu, Family, Blog } from "./components";
import { Mentor, Resident } from "./components/Forms";

import { BrowserRouter as Router, Route } from "react-router-dom";
import LeftSidebar from "./routes/Sidebar/Left";
import RightSidebar from "./routes/Sidebar/Right";

class App extends Component {
  constructor() {
    super();
  }
  
  showList() {
    var myHeaders = new Headers();

    var myInit = { method: 'GET',
                  headers: myHeaders,
                  mode: 'cors',
                  cache: 'default' };
    fetch('http://localhost:8000/mentor_list', myInit)
    .then((res) => {
      return res.json()
    })
    .then((mentors) => {
      console.log(mentors)
    })
    .catch(alert)
  }
  
  render() {
    return (
      <Router>
        <div className="container">
          <div className="navigation">
            <LeftSidebar />
            <RightSidebar />
          </div>
          <div className="components">
            <Route path="/" exact component={Main} />
            <Route path="/about/" component={About} />
            <Route path="/blog/" component={Blog} />
            <Route path="/contacts/" component={Contacts} />
            <Route path="/edu/" component={Edu} />
            <Route path="/family/" component={Family} />
            <Route path="/mentor/form/" component={Mentor} />
            <Route path="/resident/form/" component={Resident} />
            <button onClick={this.showList()}>List</button>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
