import { useState, useEffect } from 'react';
import * as ThemoviedbAPI from "../services/themoviedbAPI";

const useFetchTrendingList = () => {

    const [ movies, setMovies ] = useState(null);
    const [ status, setStatus ] = useState("idle");

    useEffect(() => {
        setStatus("pending")
        ThemoviedbAPI
            .fetchTrendingMovies()
            .then(setMovies)
            .then(setStatus("resolved"))
            .catch(error => setStatus("rejected"))
    },[])

    return { status, movies }
};

export default useFetchTrendingList;