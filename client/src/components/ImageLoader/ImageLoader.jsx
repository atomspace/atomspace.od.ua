import React, { useState } from "react";
import { string, func } from "prop-types";

const ImageLoader = ({ src, loadedClassName, loadingClassName, onClick, className }) => {
  const loadedCache = {};

  const [loaded, setLoaded] = useState(loadedCache[src]);

  const onLoad = () => {
    loadedCache[src] = true;
    setLoaded(true);
  };

  const customClassName = `${className} ${loaded ? loadedClassName : loadingClassName}`;

  return <img alt="imageLazy" src={src} onClick={onClick} className={customClassName} onLoad={onLoad} />;
};
ImageLoader.propTypes = {
  src: string,
  loadedClassName: string,
  loadingClassName: string,
  onClick: func,
  className: string,
};

ImageLoader.defaultProps = {
  onClick: () => null,
  src: "",
  className: "",
  loadingClassName: "img-loading",
  loadedClassName: "img-loaded",
};

export default ImageLoader;
