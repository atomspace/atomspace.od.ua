import React, { useContext } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { arrayOf, object, func, shape } from 'prop-types';
import MyContext from '../../context/Base/AppContext';
import { About, Blog, Contacts, Edu, Family, Main, Store } from '../../pages';
import { urls } from '../../App';

const Fullpage = ({ handleDialog, changeMerchAttr, order }) => {
  const lightPages = ['about', 'edu', 'blog', 'store', 'resident', 'mentor'];
  const { setLightTheme, setCurrentPage, hiddenSidebars } = useContext(
    MyContext,
  );
  const settingScroll = (fullpageApi, hiddenSidebars) => {
    if (fullpageApi) {
      if (hiddenSidebars) {
        fullpageApi.setAllowScrolling(false);
      } else {
        fullpageApi.setAllowScrolling(true);
      }
    }
  };
  return (
    <ReactFullpage
      anchors={urls}
      onLeave={(origin, destination) => {
        setCurrentPage(destination.anchor);
        setLightTheme(lightPages.includes(destination.anchor));
      }}
      scrollOverflow={false}
      licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
      render={({ fullpageApi }) => {
        settingScroll(fullpageApi, hiddenSidebars);
        return (
          <ReactFullpage.Wrapper>
            <Main handleDialog={handleDialog} />
            <About />
            <Blog />
            <Edu />
            <Family />
            <Store
              order={order}
              size={order.size}
              changeMerchAttr={changeMerchAttr}
              handleDialog={handleDialog}
            />
            <Contacts handleDialog={handleDialog} />
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

Fullpage.propTypes = {
  changeMerchAttr: func.isRequired,
  order: shape({}).isRequired,
  handleDialog: func.isRequired,
};

export default Fullpage;
