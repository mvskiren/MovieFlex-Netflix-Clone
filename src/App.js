import React,{useState} from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Movies from './components/Movies  /movies.js';
import Landing from './components/Movies  /landing.js';
// import PropTypes from 'prop-types';
import Footer from './Footer.js';




const  App=() =>{



  const [movies,setMovies]=useState([]);
  const [tempMovies,setTempMovies]=useState([]);
  const [IntVal,setIntVal]=useState('');

  return (
    <div className="App">
    <Header movies={movies} setMovies={setTempMovies}  setIntVal={setIntVal} />
    <Landing />
    <Movies movies={tempMovies} setMovies={setMovies} setTempMovies={setTempMovies} setIntVal={IntVal}/>
    <Footer />
    </div>
  );
}

export default App;
