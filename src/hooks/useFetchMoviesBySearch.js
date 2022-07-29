import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as ThemoviedbAPI from "../services/themoviedbAPI";

const useFetchMoviesBySearch = () => {
    const [ status, setStatus ] = useState("idle");
    const [ movies, setMovies ] = useState(null);
    const [ query, setQuery ] = useState("");

    const navigate = useNavigate();
    const location = useLocation();

    const renewSearch = new URLSearchParams(location.search).get("query");;

    useEffect(() => {
        if(renewSearch) {
            fetchMovies(renewSearch);
            setQuery(renewSearch)
        }
    }, [renewSearch])

    const setUrl = () => {
        navigate({
            ...location,
            search: `query=${query}`
        })
    }
        
    const fetchMovies = (query) => {
        setStatus("pending");
        if(query !== "")
        ThemoviedbAPI
            .fetchMoviesBySearch(query)
            .then(setMovies)
            .then(setStatus("resolved"))
            .catch(error => setStatus("rejected"))
    }
        

    const onSubmit = (e) => {
        e.preventDefault();
        fetchMovies(query);
        setUrl();
    }

    const onChange = (e) => {
        setQuery(e.target.value)
    }

    return { query,movies, status, onChange, onSubmit, location }

};

export default useFetchMoviesBySearch;