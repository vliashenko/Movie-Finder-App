import { useNavigate } from "react-router-dom"
import { BASE_IMG } from "services/themoviedbAPI";
import movieImage from "../../images/cast.jpg";
import styles from "./MovieInfoItem.module.css";
import PropTypes from "prop-types";

const MovieInfoItem = ({ movie, prevLocation }) => {
    
    const navigate = useNavigate();

    const GoBack = () => {
        navigate(prevLocation?.state?.from ?? "/")
    };

    const {vote_average, name, title, release_date, backdrop_path, overview, genres} = movie;
    const userScore = Math.floor((vote_average / 10) * 100) + "%";
    const releaseYear = release_date.slice(0,4)
    const image = backdrop_path === null ? movieImage : `${BASE_IMG}${backdrop_path}`

    
    return (
        <div className={styles.Container}>
            <button 
                onClick={GoBack}
                className={styles.ButtonBack}
            >
                Go Back
            </button>

            <div className={styles.Wrapper}>
                <div className={styles.ContainerImg}>
                    <img 
                        className={styles.Img}
                        src={image} 
                        alt={name || title} 
                    />
                </div>

                <div className={styles.SubWrapper}>
                    <p className={styles.Title}>
                        {title || name} ({releaseYear})
                    </p>

                    <p className={styles.Info}>
                        User Score: {userScore}
                    </p>

                    <p className={styles.SubTitle}>
                        Overview
                    </p>

                    <p className={styles.Info}>
                        {overview}
                    </p>

                    <p className={styles.SubTitle}>
                        Genres
                    </p>

                    <p className={styles.Info}>
                        {genres.map(genres => {
                            const { id, name } = genres;
                            return (
                                <b
                                    key={id} 
                                    className={styles.Genres}>
                                    {name}
                                </b>
                            )
                        })}
                    </p>
                </div>
            </div>
        
        </div>
    );
};

MovieInfoItem.propTypes = {
    movie: PropTypes.shape({
        vote_average: PropTypes.number || undefined.isRequired,
        name: PropTypes.string || undefined.isRequired,
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        backdrop_path: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,

        genres: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        })),
        
        prevLocation: PropTypes.objectOf(PropTypes.string.isRequired) || undefined.isRequired
    })
}

export default MovieInfoItem;