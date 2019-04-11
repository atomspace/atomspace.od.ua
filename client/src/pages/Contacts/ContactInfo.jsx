import React from "react";

const info = [
  {
    title: "+380 73 139 57 87"
  },
  {
    title: "info@atomspace.od.ua"
  },
  {
    title: "г. Одесса, Обсерваторный переулок, 2/6"
  }
];
export default () =>
  info.map(val => <span className="list-item">{val.title.toUpperCase()}</span>);
