import React from 'react'

const info = [
  {
    title: (
      <a className="atomspace-link" target="_blank" rel="noopener noreferrer" href="tel:+380 73 139 57 87">
        +380 73 139 57 87
      </a>
    ),
  },
  {
    title: (
      <a className="atomspace-link" target="_blank" rel="noopener noreferrer" href="mailto:info@atomspace.od.ua">
        info@atomspace.od.ua
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
]
export default () =>
  info.map((val, index) => (
    <span className="list-item" key={index}>
      {val.title}
    </span>
  ))
