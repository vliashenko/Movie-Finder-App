import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom"
import * as ThemoviedbAPI from "../services/themoviedbAPI";

const useFetchCastById = () => {
    
    const movieId = useOutletContext();

    const [ status, setStatus ] = useState("idle");
    const [ cast, setCast ] = useState(null);

    useEffect(() => {
        setStatus("pending");
        ThemoviedbAPI
            .fetchCreditsById(movieId)
            .then(setCast)
            .then(setStatus("resolved"))
            .catch(error => setStatus("rejected"))
    }, [movieId])

    return { cast, status }
};

export default useFetchCastById;