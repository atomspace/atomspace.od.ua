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

const urls = {
  main: "main",
  about: "about",
  blog: "blog",
  edu: "edu",
  family: "family",
  store: "store",
  contacts: "contacts"
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      sidebarRows: [],
      currentPage: "main"
    };
  }
  // getCurrentPageName = () => {
  //   const loc = window.location.pathname;
  //   console.log(loc);
  //   // if (this.getCurrentPageName() === "/") {
  //   //   console.log(this.getSidebarData());
  //   //   this.setState({ sidebarRows: this.getSidebarData() });
  //   // }
  //   let height = window.clientHeight;
  //   let location = loc.replace(/\//g, "");

  //   this.setState({ sidebarRows: this.getSidebarData(loc) });
  //   if (loc === "/") {
  //     location = "/";
  //     return "main";
  //   }
  //   return location;
  // };
  // setCurrentPage(page) {
  //   if (this.state.currentPage !== page) {
  //     console.log(page);
  //     this.setState(state => ({
  //       ...state,
  //       currentPage: page,
  //       sidebarRows: this.getSidebarData(page)
  //     }));
  //   }
  // }
  // handleScroll = () => {
  //   function preventDefault(e) {
  //     e = e || window.event;
  //     if (e.preventDefault) e.preventDefault();
  //     e.returnValue = false;
  //   }

  //   let lastScrollY = window.scrollY;
  //   let clientHeight = document.body.clientHeight;

  //   // console.dir(clientHeight);
  //   // console.dir(lastScrollY);
  //   // window.location.href = "#about";
  //   let currentScroll = 0;

  //   // if(currentScroll < lastScrollY){
  //   //   currentScroll = 940;
  //   //   window.scroll(0, 940);
  //   // }
  //   // if(currentScroll )

  //   // window.scroll(0, 0);
  //   // if
  //   // window.removeEventListener("scroll", this.handleScroll);
  //   // window.removeEventListener('DOMMouseScroll', preventDefault, false);
  //   let onePage = clientHeight / 7;
  //   const startMainPage = 0;
  //   const startAboutPage = onePage;
  //   const startEduPage = onePage * 2;
  //   const startBlog = onePage * 3;
  //   const startFamily = onePage * 4;
  //   const startStore = onePage * 5;
  //   const startContacts = onePage * 6;

  //   if (startMainPage <= lastScrollY && lastScrollY <= startAboutPage) {
  //     this.setCurrentPage("main");
  //   } else if (startAboutPage <= lastScrollY && lastScrollY <= startEduPage) {
  //     this.setCurrentPage("about");
  //   } else if (startEduPage <= lastScrollY && lastScrollY <= startBlog) {
  //     this.setCurrentPage("edu");
  //   } else if (startBlog <= lastScrollY && lastScrollY <= startFamily) {
  //     this.setCurrentPage("blog");
  //   } else if (startFamily <= lastScrollY && lastScrollY <= startStore) {
  //     this.setCurrentPage("family");
  //   } else if (startStore <= lastScrollY && lastScrollY <= startContacts) {
  //     this.setCurrentPage("store");
  //   } else if (startContacts === lastScrollY) {
  //     this.setCurrentPage("contacts");
  //   } else {
  //     console.log(lastScrollY);
  //   }
  //   // if(lastScrollY <= 1080){
  //   //   this.setState({page: "nextPage"});
  //   // }
  // };
  // componentDidMount() {
  //   window.addEventListener("scroll", this.handleScroll);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // }
  // shouldComponentUpdate(prevProps, prevState) {
  //   if (
  //     JSON.stringify(prevState.sidebarRows) !==
  //     JSON.stringify(this.state.sidebarRows)
  //   ) {
  //     return true;
  //   }
  //   return false;
  // }

  getSidebarData = type => {
    switch (type) {
      case urls.main:
        return [{
            title: "Стать ментором",
            link: "/mentor/form/"
          },{
            title: "Стать резидентом",
            link: "/resident/form/"
          }];
      case urls.store:
        return [{
            title: "SIZE S M L XL"
          },{
            title: "BUY: 600UAH"
          }];
      case urls.contacts:
        return [{
            title: "+380 73 139 57 87"
          },{
            title: "info@atomspace.od.ua"
          },{
            title: "г. Одесса, Обсерваторный переулок, 2/6"
          }];
      default:
        return [];
    }
  };
  goToPage = (pageNumber) => {
    this.reactPageScroller.goToPage(pageNumber);
  }
  render() {
    return (
      <div className="container">
        <Sidebar
          sidebarRows={this.state.sidebarRows}
          pageName={this.state.currentPage}
        />

        <ReactPageScroller
          ref={c => this.reactPageScroller = c}>
              {/* <div className="components"> */}
                <Main />
                <About />
                <Edu />
                <Blog />
                <Family />
                {/* <Mentor/> */}
                {/* <Resident/> */}
                <Store />
                <Contacts />
              {/* </div> */}
        </ReactPageScroller>  
        
      </div>
    );
  }
}

export default App;
