import React, { useState, useEffect} from "react";
import { Img } from "./MoviePicture.styles";
import { useParams } from "react-router-dom";
import MovieData from '../../SearchBar/top-rated-movies-01.json';

const MoviePicture = () => {
    let [contents, setcontents] = useState([]);
    
    useEffect(() => {
      getcontent();
    }, []);
    let params = useParams();
    let getcontent= async() =>{
        let url = `http://109.244.159.55/api/movie/${params.id}/info/`;
        console.log(url);
        let response1 = await fetch(url);
        let data1 = await response1.json();
        let response2 = await fetch(data1.movie_url);
        let data2 = await response2.json();
        console.log("Data", data2);
        setcontents(data2);
    }
    
    let url=`../../SearchBar/top-rated-movies-01.json/${contents.posterurl}`
    return (
      <Img
        src={url}
        alt={contents.original_title}
        title={contents.original_title}
      />
    );
};

export default MoviePicture;
