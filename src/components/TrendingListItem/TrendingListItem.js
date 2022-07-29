import React from 'react';
import { Link } from "react-router-dom"
import { BASE_IMG } from 'services/themoviedbAPI';
import styles from "./TrendingListItem.module.css"
import PropTypes from "prop-types";

const TrendingListItem = ({ movies, location }) => {
    
    return (
        <>
            {movies.map(movie =>{
                const { id, backdrop_path, title, name } = movie;
                return (
                    <li 
                        className={styles.Item}
                        key={id}
                    >
                        <Link 
                            to={`movies/${movie.id}`}
                            state={{from: location}}
                            className={styles.Link} 
                        >
                            <div className={styles.Container}>
                                <img 
                                    className={styles.Img}
                                    src={`${BASE_IMG}${backdrop_path}`} 
                                    alt={title ?? name} 
                                />
                                <p className={styles.Title}>
                                    {title ?? name}
                                </p>
                            </div>
                        </Link>
                        
                    </li>
            )})}
        </>
    );
};

TrendingListItem.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        backdrop_path: PropTypes.string.isRequired,
        title: PropTypes.string || null.isRequired,
        name: PropTypes.string || null.isRequired
    }))
}

export default TrendingListItem;