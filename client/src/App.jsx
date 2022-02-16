import React, { Suspense, useEffect, useState } from "react";
import { get } from "lodash";
import "./assets/styles/_index.scss";
import Sidebar from "./routes/Sidebar/Sidebar.jsx";
import Form from "./components/Forms/Form";
import LocalStorage from "./utils/localStorage";
import Language from "./components/Language/Language";
import AppProvider from "./context/Provider/Provider";
import Fullpage from "./container/Fullpage/Fullpage";
import Hash from "./utils/hash";
import Soc from "./components/Soc";

export const urls = ["main", "about", "blog", "edu", "family", "store", "contacts"];

export const MENTOR_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSfuSQR_zrmAu4uxrnVdjD2nfiilnzEmvEPTluWvH0mANCAb7Q/viewform";
export const RESIDENT_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSdkROZLPdlHe6Y5VeWMgKzrfuurPJjUYaBENjWo4NPFlqp8nw/viewform";

const App = () => {
  const defaultHashPage = "#main";

  const [userHash, setUserHash] = useState([window.location.hash]);
  const [hashForm, setHashForm] = useState(null);
  const [order, setOrder] = useState(LocalStorage.getMerch());

  const handleBack = () => {
    window.onpopstate = () => {
      const hash = get(Hash.get(), defaultHashPage);
      const userHashNext = [...userHash, hash];
      setUserHash(userHashNext);
    };
  };

  useEffect(() => {
    setHashForm(Hash.get());
    handleBack();
  }, [hashForm, userHash]);

  const getLastUserLoc = () => {
    return userHash[userHash.length - 1];
  };

  const getPreLastUserLoc = () => {
    return userHash[userHash.length - 2] || "#";
  };

  const getBack = () => {
    setHashForm(null);
    const preLastUserHash = getPreLastUserLoc();
    const lastUserHash = getLastUserLoc();
    Hash.set(preLastUserHash || lastUserHash);
  };

  const handleDialog = (e) => {
    setHashForm(e.target.hash);
  };

  const changeMerchAttr = (prop) => {
    LocalStorage.setMerch({ ...order, ...prop });
    setOrder({ ...order, ...prop });
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppProvider>
        <Soc
          src={{
            facebook: "https://www.facebook.com/atomspace.od.ua/",
            instagram: "https://www.instagram.com/atomspace.od/",
          }}
          classes="soc-icons footer"
        />
        <Sidebar handleDialog={handleDialog} changeMerchAttr={changeMerchAttr} order={order} />
        <Language userHash={userHash} />
        <Fullpage handleDialog={handleDialog} changeMerchAttr={changeMerchAttr} order={order} />
        <Form hashForm={hashForm} getBack={getBack} order={order} />
      </AppProvider>
    </Suspense>
  );
};

export default App;
