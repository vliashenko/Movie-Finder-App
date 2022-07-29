import useFetchTrendingList from 'hooks/useFetchTrendingList';
import { useLocation } from "react-router-dom";
import TrendingListItem from 'components/TrendingListItem/TrendingListItem';
import Loader from 'components/Loader/Loader';
import NotFoundView from 'view/NotFoundView';
import styles from "./TrendingList.module.css"
import PropTypes from "prop-types";

const TrendingList = () => {

    const location = useLocation();
    const { status, movies } = useFetchTrendingList();

    if(status === "idle" || status === "pending"){
        return (
            <Loader/>
        )
    }

    if(status === "rejected"){
        return (
            <NotFoundView/>
        )
    }
    if(status === "resolved"){
        return (
            <>
                <p className={styles.Title}>
                    Trending today
                </p>
            
                <ul className={styles.MovieList}>
                    {movies && <TrendingListItem movies={movies.results} location={location}/>}
                </ul>
            </>
        )
    }
};

TrendingList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object.isRequired)
}

export default TrendingList;