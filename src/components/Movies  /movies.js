import React, { useEffect} from 'react';
import Movie from './Movie/movie.js';
import classes from './mvstyles.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';


const API_KEY ='4894bd62';

const series =['Love Aaj Kal','bheeshma','arjun reddy','avengers','Gully Boy','Zero','iron man','Padmaavat','Dear Zindagi']

const Movies = (props)=> {
//   const [movies,setMovies]=useState([]);
    useEffect(()=>{
      const promises= series.map(series => {
         return fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(series)}&apikey=${API_KEY}&page=1`)
            .then(res=> res.json());
        })
        Promise.all(promises).then(movies => {
            const MovieRows=[];
       movies.map((movie)=>movie.Search).flat(2).map((movie) => {
        MovieRows.push({ title: movie.Title,
            year: movie.Year,
            image: movie.Poster,
            imdb: movie.imdbID})
                 
        })
            console.log(MovieRows);
            props.setMovies(MovieRows);
            props.setTempMovies(MovieRows);
            

        })
        

       
    },[])

    if(props.movies.length===0){

        return (<div className={classes.loader}>
        <CircularProgress />
        </div> );
        }


    const mvs = props.movies.map(movie => {
        return (
        <Movie 
            key={movie.imdbID}
            title={movie.title}
            year={movie.year}
            image={movie.image} 
       /> 
           
       
      
        );
    });



return (
    <div className={classes.movies}>
    {mvs}
    </div>

);
}
export default Movies;