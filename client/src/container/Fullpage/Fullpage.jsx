import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import MyContext from '../../context/Base/AppContext';
import { About, Blog, Contacts, Edu, Family, Main, Store } from '../../pages';
import { urls } from '../../App';

const Fullpage = ({ handleDialog, changeMerchAttr, order }) => {
  const lightPages = ['about', 'edu', 'blog', 'store', 'resident', 'mentor'];

  return (
    <MyContext.Consumer>
      {({ setLightTheme, setCurrentPage }) => {
        return (
          <ReactFullpage
            anchors={urls}
            onLeave={(origin, destination) => {
              console.log(destination.anchor);
              setCurrentPage(destination.anchor);
              setLightTheme(lightPages.includes(destination.anchor));
            }}
            responsiveHeight="720px"
            licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
            render={() => (
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
            )}
          />
        );
      }}
    </MyContext.Consumer>
  );
};
export default Fullpage;
