import React from 'react';
import classname from "classnames";

export default props =>{
    return <div onClick={props.onClick} className={classname({slick: true, 'slick-prev': props.rotate, 'slick-next': !props.rotate})}></div>
}