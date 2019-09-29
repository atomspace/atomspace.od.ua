import React, { Component, Suspense } from 'react';
import './assets/styles/_index.scss';
import ReactFullpage from '@fullpage/react-fullpage';
import { About, Blog, Contacts, Edu, Family, Main, Store } from './pages';
import Sidebar from './routes/Sidebar/Sidebar.jsx';
import Form from './components/Forms/Form';
import LocalStorage from './localStorage';
import Language from './components/Language/Language';

export const urls = [
  'main',
  'about',
  'blog',
  'edu',
  'family',
  'store',
  'contacts',
];

class App extends Component {
  defaultHashPage = '#main';

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'main',
      userHash: [window.location.hash],
      hashForm: null,
      order: LocalStorage.getMerch(),
    };
  }

  async componentDidMount() {
    this.changeDialog(this.getHash());
    this.handleBack();
  }

  getHash() {
    return window.location.hash;
  }

  setHash(data) {
    window.location.hash = data;
  }

  getLastUserLoc() {
    const { userHash } = this.state;
    return userHash[userHash.length - 1];
  }

  getPreLastUserLoc() {
    const { userHash } = this.state;
    return userHash[userHash.length - 2] || '#';
  }

  getBack = () => {
    this.changeDialog(null);
    const preLastUserHash = this.getPreLastUserLoc();
    const lastUserHash = this.getLastUserLoc();
    this.setHash(preLastUserHash || lastUserHash);
  };

  handleBack = () => {
    window.onpopstate = () => {
      const { userHash } = this.state;
      const hash = window.location.hash
        ? window.location.hash
        : this.defaultHashPage;
      const userHashNext = [...userHash, hash];
      this.setState({ userHash: userHashNext });
    };
  };

  handleDialog = e => {
    this.changeDialog(e.target.hash);
  };

  changeMerchAttr = prop => {
    const { order } = this.state;
    LocalStorage.setMerch({ ...order, ...prop });
    this.setState({
      order: { ...order, ...prop },
    });
  };

  pageOnChange = (origin, destination) => {
    this.setState(state => ({
      ...state,
      currentPage: destination.anchor,
    }));
  };

  loader = () => (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div>loading...</div>
    </div>
  );

  changeDialog(hashForm) {
    this.setState(state => ({
      ...state,
      hashForm,
    }));
  }

  increaseCountOfMerch(merches) {
    let tempMerch = [];
    while (tempMerch.length <= 3) {
      tempMerch = tempMerch.concat(merches);
    }
    return tempMerch;
  }

  render() {
    const { hashForm, order, merches, currentPage, userHash } = this.state;
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <Sidebar
            pageName={currentPage}
            handleDialog={this.handleDialog}
            changeMerchAttr={this.changeMerchAttr}
            order={order}
          />
          <Language userHash={userHash} />
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
                  merches={merches}
                  order={order}
                  size={order.size}
                  changeMerchAttr={this.changeMerchAttr}
                  handleDialog={this.handleDialog}
                />
                <Contacts handleDialog={this.handleDialog} />
              </ReactFullpage.Wrapper>
            )}
          />
          <Form hashForm={hashForm} getBack={this.getBack} order={order} />
        </div>
      </Suspense>
    );
  }
}

export default App;
