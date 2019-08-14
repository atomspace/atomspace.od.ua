import React from 'react';

const info = [
  {
    title: (
      <a className="atomspace-link" target="_blank" rel="noopener noreferrer" href="tel:+380 99 554 27 10">
        +380 99 554 27 10
      </a>
    ),
  },
  {
    title: (
      <a className="atomspace-link" target="_blank" rel="noopener noreferrer" href="mailto:atomspace.info@gmail.com">
        atomspace.info@gmail.com
      </a>
    ),
  },
  {
    href: true,
    title: (
      <a
        className="atomspace-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://goo.gl/maps/zD9kSpLVmMgGhC958"
      >
        Г. ОДЕССА, ОБСЕРВАТОРНЫЙ ПЕРЕУЛОК, 2/6
      </a>
    ),
  },
];
export default () =>
  info.map((val, index) => (
    <span className="list-item" key={index}>
      {val.title}
    </span>
  ));
