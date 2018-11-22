import React, { Component } from "react";
// import logo from "./logo.svg";
import "./assets/styles/_index.scss";
import { Main, About, Contacts, Edu, Family, Blog, Store } from "./components";
import { Mentor, Resident } from "./components/Forms";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidebar from "./routes/Sidebar/Sidebar.jsx";

class App extends Component {
  constructor() {
    super();
  }
<<<<<<< HEAD
  
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
  
=======
  createMentor() {
    let headers = new Headers({
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'multipart/form-data'
    });
    fetch("http://127.0.0.1:8000/mentor_form",{
      method: 'GET',
      headers,
      mode: 'cors',
      cache: 'default'
    })
      .then(res => {
        console.log(res.headers.get("Content-Type"));
        console.log(res.status);
        return res.json();
      })
      .then((user) => {
        console.log(user); // iliakan
      })
      .catch(err => {
        console.err(err);
      });
  }
>>>>>>> b912ed71f171648809d7e143fbdf842eaef380cd
  render() {
    return (
      <Router>
        <div className="container">
          <Sidebar />
          <div className="components">
            <Route path="/" exact component={Main} />
            <Route path="/about/" component={About} />
            <Route path="/blog/" component={Blog} />
            <Route path="/contacts/" component={Contacts} />
            <Route path="/edu/" component={Edu} />
            <Route path="/family/" component={Family} />
            <Route path="/mentor/form/" component={Mentor} />
            <Route path="/store/" component={Store} />
            <Route path="/resident/form/" component={Resident} />
            <button onClick={this.showList()}>List</button>
          </div>
          <button onClick={this.createMentor.bind(this)} />
        </div>
      </Router>
    );
  }
}

export default App;
