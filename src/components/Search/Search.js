import useFetchMoviesBySearch from "hooks/useFetchMoviesBySearch";
import SearchForm from "components/SearchForm/SearchForm";
import Loader from "components/Loader/Loader";
import NotFoundView from "view/NotFoundView";
import SearchList from "components/SearchList/SearchList";
import PropTypes from "prop-types"

const Search = () => {
    const { query,movies, status, onChange, onSubmit, location } = useFetchMoviesBySearch();
    
    if(status === "idle") {
        return (
            <SearchForm query={query} onChange={onChange} onSubmit={onSubmit}/>
        );
    }

    if(movies?.results?.length === 0) {
        return (
            <>
                <SearchForm query={query} onChange={onChange} onSubmit={onSubmit}/>
                <h1>
                    No such movie found:(
                </h1>
            </>
        )
    }

    if(status === "pending") {
        return (
            <>
                <SearchForm query={query} onChange={onChange} onSubmit={onSubmit}/>
                <Loader/>
            </>
        )
    }

    if(status === "rejected") {
        return (
            <NotFoundView/>
        )
    }

    if(status === "resolved") {
        return (
            <>
                <SearchForm query={query} onChange={onChange} onSubmit={onSubmit}/>
                {movies?.results && <SearchList movies={movies.results} location={location}/>}
            </>
        )
    }
};

Search.propTypes = {
    movies: PropTypes.shape({
        results: PropTypes.arrayOf(PropTypes.object).isRequired
    })
}

export default Search;