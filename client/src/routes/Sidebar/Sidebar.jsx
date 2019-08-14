import React, { Component } from 'react';
import * as classnames from 'classnames';
import LeftSidebar from './Left';
import RightSidebar from './Right';
import SmallSidebar from './Small';

class Sidebar extends Component {
  render() {
    const { pageName } = this.props;
    const classes = classnames('navigation', pageName);
    const links = [
      {
        href: '#main',
        text: 'ГЛАВНАЯ',
      },
      {
        href: '#about',
        text: 'О ПРОЕКТЕ',
      },
      {
        href: '#blog',
        text: 'БЛОГ',
      },
      {
        href: '#edu',
        text: 'ОБРАЗОВАТЕЛЬНЫЕ ПРОГРАММЫ',
      },
      {
        href: '#family',
        text: 'ATOM TEAM',
      },
      {
        href: '#store',
        text: 'ATOM STORE',
      },
      {
        href: '#contacts',
        text: 'КОНТАКТЫ',
      },
      {
        href: 'https://www.it2school.od.ua/',
        text: 'IT2SCHOOL',
      },
    ];
    return (
      <div className={classes}>
        <LeftSidebar {...this.props} />
        <RightSidebar {...this.props} links={links} />
        <SmallSidebar {...this.props} links={links} />
      </div>
    );
  }
}

export default Sidebar;
