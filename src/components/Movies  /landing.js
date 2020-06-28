import React from 'react';
import logo from './landing.mp4'; 
import Poster from './landing.png';
import classes from './landing.module.css';

const landing=(props)=> {
    return (
      <div className={classes.showcase}>
        {/* <img className={classes.img}src={logo} alt="Logo" />  */}
        <video className={classes.img} autoPlay loop muted poster={Poster}>
        <source src={logo} type='video/mp4' />
        <source src={logo} type="video/ogg" /> 
</video>
        </div>
    )
}
export default landing;
