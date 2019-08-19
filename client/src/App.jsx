import React, { Component } from 'react';
import './assets/styles/_index.scss';
import ReactFullpage from '@fullpage/react-fullpage';
import { About, Blog, Contacts, Edu, Family, Main, Store } from './pages';
import Mentor from './components/Forms/Mentor';
import Sidebar from './routes/Sidebar/Sidebar.jsx';
import BuyForm from './components/Forms/BuyForm';
import Resident from './components/Forms/Resident/Resident';
import LocalStorage from './localStorage';

export const urls = ['main', 'about', 'blog', 'edu', 'family', 'store', 'contacts'];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'main',
      userHash: ['#'],
      form: null,
      order: LocalStorage.getMerch(),
    };
  }

  async componentDidMount() {
    this.changeDialog(this.getHash());
    this.handleBack();
  }

  increaseCountOfMerch(merches) {
    let tempMerch = [];
    while (tempMerch.length <= 3) {
      tempMerch = tempMerch.concat(merches);
    }
    return tempMerch;
  }

  getHash() {
    return window.location.hash;
  }

  setHash(data) {
    window.location.hash = data;
  }

  getBack = () => {
    this.changeDialog(null);
    const preLastUserHash = this.state.userHash[this.state.userHash.length - 2];
    const lastUserHash = this.state.userHash[this.state.userHash.length - 1];
    this.setHash(preLastUserHash || lastUserHash);
  };

  handleBack = () => {
    window.onpopstate = () => {
      const hash = window.location.hash ? window.location.hash : '#';
      const forms = ['#mentorForm', '#residentForm'];
      const userHash = [...this.state.userHash, hash];
      if (forms.includes(userHash[userHash.length - 2])) {
        this.getBack();
      }
      this.setState({ userHash });
    };
  };

  changeDialog(hash) {
    this.setState((state) => ({
      ...state,
      form: hash,
    }));
  }

  handleDialog = (e) => {
    this.changeDialog(e.target.hash);
  };

  changeMerchAttr = (prop) => {
    console.log(this.state.order);
    LocalStorage.setMerch({ ...this.state.order, ...prop });
    this.setState({
      order: { ...this.state.order, ...prop },
    });
  };
  pageOnChange = (origin, destination) => {
    this.setState((state) => ({
      ...state,
      currentPage: destination.anchor,
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
          responsiveHeight="720px"
          licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
          render={() => (
            <ReactFullpage.Wrapper>
              <Main handleDialog={this.handleDialog} />
              <About />
              <Blog />
              <Edu />
              <Family />
              <Store
                merches={this.state.merches}
                order={this.state.order}
                size={this.state.size}
                changeMerchAttr={this.changeMerchAttr}
                handleDialog={this.handleDialog}
              />
              <Contacts handleDialog={this.handleDialog} />
            </ReactFullpage.Wrapper>
          )}
        />
        {this.state.form === '#residentForm' && <Resident getBack={this.getBack} />}
        {this.state.form === '#mentorForm' && <Mentor getBack={this.getBack} />}
        {this.state.form === '#buyForm' && <BuyForm getBack={this.getBack} order={this.state.order} />}
      </div>
    );
  }
}

export default App;
