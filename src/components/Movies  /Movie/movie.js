import React from 'react';
import PropTypes from 'prop-types';
import classes from './style.module.css';

const Movie=(props) => {
 
    console.log("I am caslled");
    Movie.propTypes= {
        title: PropTypes.string,
        image: PropTypes.string,
        Year: PropTypes.string
       
      }


    return (
        <div className={classes.movie}>
        {/* <h2 >{props.title}</h2> */}
        <img className={classes.img} src={props.image} alt='poster_image' />
        <h2 >{props.title}</h2>
        <h3 >{props.year} </h3>
        </div>
    )
}
export default Movie;