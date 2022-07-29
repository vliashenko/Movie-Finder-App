import { Link } from "react-router-dom"
import PropTypes from "prop-types";
import styles from "./SearchList.module.css";

const SearchList = ({ location, movies }) => {
    return (
        <ul>
            {movies.map(movie => {
                return (
                    <Link 
                        className={styles.Link}
                        key={movie.id} 
                        to={`/movies/${movie.id}`} 
                        state={{from: location}}>
                            <li className={styles.Link}>
                                {movie.name || movie.title}
                            </li>
                    </Link>
                )
            })}
        </ul>
    );
};

SearchList.propTypes = {
    location: PropTypes.objectOf(PropTypes.string),
    movies: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name:  PropTypes.string || undefined.isRequired,
        title:  PropTypes.string || undefined.isRequired,        
    }))
}

export default SearchList;