import React from "react";

const info = [
  {
    title: "+380 99 554 27 10"
  },
  {
    title: "atomspace.info@gmail.com"
  },
  {
    title: "г. Одесса, Обсерваторный переулок, 2/6"
  }
];
export default () =>
  info.map((val, index) => (
    <span className="list-item" key={index}>
      {val.title.toUpperCase()}
    </span>
  ));
