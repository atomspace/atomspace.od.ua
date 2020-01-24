import React from "react";
import { useTranslation } from "react-i18next";

const ContactInfo = () => {
  const { t } = useTranslation();
  const info = [
    {
      id: 1,
      title: (
        <a className="atomspace-link" target="_blank" rel="noopener noreferrer" href="tel:+380 99 554 27 10">
          +380 99 554 27 10
        </a>
      ),
    },
    {
      id: 2,
      title: (
        <a className="atomspace-link" target="_blank" rel="noopener noreferrer" href="mailto:atomspace.info@gmail.com">
          atomspace.info@gmail.com
        </a>
      ),
    },
    {
      id: 3,
      href: true,
      title: (
        <a
          className="atomspace-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://goo.gl/maps/zD9kSpLVmMgGhC958"
        >
          {t("atomspace.address")}
        </a>
      ),
    },
  ];
  return info.map((val) => (
    <span className="list-item" key={val.id}>
      {val.title}
    </span>
  ));
};

export default ContactInfo;
