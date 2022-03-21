import React from "react";

import MovieItem from "../components/MovieItem";
import Navigation from '../components/Navigation';
import End from '../components/End'

const MovieItemPage = () =>{
    
    return(
        <div>
            <Navigation />
            <MovieItem/>
            <End/>
        </div>
    )
}

export default MovieItemPage