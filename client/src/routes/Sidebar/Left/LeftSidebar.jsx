import React from 'react';
import cl from 'classnames';
import { useTranslation } from 'react-i18next';
import { bool, func, string, shape } from 'prop-types';
import { urls } from '../../../App';
import MerchSize from '../../../pages/Store/MerchSize';
import MerchBuy from '../../../pages/Store/MerchBuy';
import ContactInfo from '../../../pages/Contacts/ContactInfo';
import Link from '../Link';

const LeftSidebar = ({
  isLightTheme,
  pageName,
  handleDialog,
  changeMerchAttr,
  order,
}) => {
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
                title: t('form.beMentor'),
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
                title: t('form.beResident'),
                link: '#residentForm',
              },
            },
          },
          {
            id: 3,
            Component: Link,
            props: {
              handleDialog,
              row: {
                title: t('form.bePartner'),
                link: '#partnerForm',
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
  return (
    sidebarRows && (
      <div
        className={cl('vertical-line left', {
          'border-none': !sidebarRows.length,
        })}
      >
        <nav
          className={cl('sidebar__left', {
            light_theme: isLightTheme,
          })}
        >
          <div className={cl('list-container', 'flex', 'flex-col')}>
            {sidebarRows.map(el => (
              <div className="list" key={el.id}>
                <el.Component {...el.props} />
              </div>
            ))}
          </div>
        </nav>
      </div>
    )
  );
};

LeftSidebar.propTypes = {
  changeMerchAttr: func.isRequired,
  order: shape({}).isRequired,
  handleDialog: func.isRequired,
  isLightTheme: bool.isRequired,
  pageName: string.isRequired,
};

export default LeftSidebar;
