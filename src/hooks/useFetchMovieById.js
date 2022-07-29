import * as ThemoviedbAPI from "../services/themoviedbAPI";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const useFetchMovieById = () => {
    const params = useParams();
    const movieId = params.id;

    const [ status, setStatus ] = useState("idle");
    const [ movie, setMovie ] = useState(null);

    useEffect(() => {
        setStatus("pending");
        ThemoviedbAPI
            .fetchMovieById(movieId)
            .then(setMovie)
            .then(setStatus("resolved"))
            .catch(error => setStatus("rejected"))
    },[movieId])

    return { status, movie, movieId }
};

export default useFetchMovieById;