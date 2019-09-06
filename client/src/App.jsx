import React, { Component, Suspense } from 'react';
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

  getHash() {
    return window.location.hash;
  }

  setHash(data) {
    window.location.hash = data;
  }

  getBack = () => {
    this.changeDialog(null);
    const { userHash } = this.state;
    const preLastUserHash = userHash[userHash.length - 2];
    const lastUserHash = userHash[userHash.length - 1];
    this.setHash(preLastUserHash || lastUserHash);
  };

  handleBack = () => {
    window.onpopstate = () => {
      const { userHash } = this.state;
      const hash = window.location.hash ? window.location.hash : '#';
      const forms = ['#mentorForm', '#residentForm'];
      const userHashNext = [...userHash, hash];
      if (forms.includes(userHashNext[userHashNext.length - 2])) {
        this.getBack();
      }
      this.setState({ userHashNext });
    };
  };

  handleDialog = (e) => {
    this.changeDialog(e.target.hash);
  };

  changeMerchAttr = (prop) => {
    const { order } = this.state;
    LocalStorage.setMerch({ ...order, ...prop });
    this.setState({
      order: { ...order, ...prop },
    });
  };

  pageOnChange = (origin, destination) => {
    this.setState((state) => ({
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

  changeDialog(form) {
    this.setState((state) => ({
      ...state,
      form,
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
    const { form, order, merches, currentPage } = this.state;
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <Sidebar
            pageName={currentPage}
            handleDialog={this.handleDialog}
            changeMerchAttr={this.changeMerchAttr}
            order={order}
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
          {form === '#residentForm' && <Resident getBack={this.getBack} />}
          {form === '#mentorForm' && <Mentor getBack={this.getBack} />}
          {form === '#buyForm' && <BuyForm getBack={this.getBack} order={order} />}
        </div>
      </Suspense>
    );
  }
}

export default App;
