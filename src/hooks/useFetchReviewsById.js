import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import * as ThemoviedbAPI from "../services/themoviedbAPI";

const useFetchReviewsById = () => {
    const movieId = useOutletContext();

    const [ status, setStatus ] = useState("idle");
    const [ reviews, setReviews ] = useState(null);

    useEffect(() => {
        setStatus("pending");
        ThemoviedbAPI
            .fetchReviewsById(movieId)
            .then(setReviews)
            .then(setStatus("resolved"))
            .catch(error => setStatus("rejected"))
    },[movieId]);
   
    return { reviews, status}
};

export default useFetchReviewsById;