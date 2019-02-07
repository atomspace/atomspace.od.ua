import Arrow from "../../assets/images/icons/arrow.png";
import React, { PureComponent } from 'react';
export default (props) =>{
    const classes = ['slick'];
    props.rotate ? classes.push('slick-prev') : classes.push('slick-next');
    return <div onClick={props.onClick} className={classes.join(' ')}></div>
}