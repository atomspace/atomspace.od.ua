import React from 'react';
import cl from 'classnames';
import { useTranslation } from 'react-i18next';
import Soc from '../../../components/Soc';
import { urls } from '../../../App';
import MerchSize from '../../../pages/Store/MerchSize';
import MerchBuy from '../../../pages/Store/MerchBuy';
import ContactInfo from '../../../pages/Contacts/ContactInfo';
import Link from '../Link';

const LeftSidebar = ({ pageName, handleDialog, changeMerchAttr, order }) => {
  const { t } = useTranslation();
  const getLeftSidebarData = () => {
    switch (pageName) {
      case urls[0]:
        return [
          {
            id: 1,
            Component: Link,
            props: {
              handleDialog,
              row: {
                title: t('contacts.beMentor'),
                link: '#mentorForm',
              },
            },
          },
          {
            id: 2,
            Component: Link,
            props: {
              handleDialog,
              row: {
                title: t('contacts.beResident'),
                link: '#residentForm',
              },
            },
          },
        ];
      case urls[5]:
        return [
          {
            id: 1,
            Component: MerchSize,
            props: {
              changeMerchAttr,
              size: order.size,
            },
          },
          {
            id: 2,
            Component: MerchBuy,
            props: {
              handleDialog,
              cost: order.cost,
            },
          },
        ];
      case urls[6]:
        return [
          {
            id: 1,
            Component: ContactInfo,
          },
        ];
      default:
        return [];
    }
  };

  const sidebarRows = getLeftSidebarData();

  const sidebarClasses = cl('vertical-line left', {
    'border-none': !sidebarRows.length,
  });
  const lightPages = ['about', 'edu', 'blog', 'store', 'resident', 'mentor'];

  return (
    <div className={sidebarClasses}>
      <nav
        className={cl('sidebar__left', {
          light_theme: lightPages.includes(pageName),
        })}
      >
        <div className="flex flex-col">
          {sidebarRows.map(el => (
            <div className="list" key={el.id}>
              <el.Component {...el.props} />
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
};

export default LeftSidebar;
