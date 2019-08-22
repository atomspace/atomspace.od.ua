import React from 'react';
import classname from 'classnames';
import Soc from '../../../components/Soc';
import { urls } from '../../../App';
import MerchSize from '../../../pages/Store/MerchSize';
import MerchBuy from '../../../pages/Store/MerchBuy';
import ContactInfo from '../../../pages/Contacts/ContactInfo';
import Link from '../Link';

class LeftSidebar extends React.Component {
  getLeftSidebarData() {
    const { pageName, handleDialog, changeMerchAttr, order } = this.props;
    switch (pageName) {
      case urls[0]:
        return [
          <Link
            key={1}
            handleDialog={handleDialog}
            row={{
              title: 'Стать ментором',
              link: '#mentorForm',
            }}
          />,
          <Link
            key={2}
            handleDialog={handleDialog}
            row={{
              title: 'Стать резидентом',
              link: '#residentForm',
            }}
          />,
        ];
      case urls[5]:
        return [
          <MerchSize key={1} changeMerchAttr={changeMerchAttr} size={order.size} />,
          <MerchBuy key={2} handleDialog={handleDialog} cost={order.cost} />,
        ];
      case urls[6]:
        return [<ContactInfo key={1} />];
      default:
        return [];
    }
  }

  render() {
    const { pageName } = this.props;
    const sidebarRows = this.getLeftSidebarData();

    const sidebarClasses = classname('vertical-line left', {
      'border-none': !sidebarRows.length,
    });
    const lightPages = ['about', 'edu', 'blog', 'store', 'resident', 'mentor'];

    return (
      <div className={sidebarClasses}>
        <nav className={classname({ sidebar__left: true, light_theme: lightPages.includes(pageName) })}>
          <div className="flex flex-col">
            {sidebarRows.map((el, index) => (
              <div className="list" key={index}>
                {el}
              </div>
            ))}
          </div>
          <Soc
            src={{
              facebook: 'https://www.facebook.com/atomspace.od.ua/',
              instagram: 'https://www.instagram.com/atomspace.od/',
            }}
            classes="flex soc-icons"
          />
        </nav>
      </div>
    );
  }
}

export default LeftSidebar;
