import { useLocation, Outlet } from "react-router-dom";
import useFetchMovieById from 'hooks/useFetchMovieById';
import Loader from 'components/Loader/Loader';
import NotFoundView from 'view/NotFoundView';
import MovieInfoItem from 'components/MovieInfoItem/MovieInfoItem';
import AdditionalInfo from "components/AdditionalInfo/AdditionalInfo";

const MovieInfo = () => {

    const { status, movie, movieId } = useFetchMovieById();

    const location = useLocation();


    if(status ==="idle" || status === "pending") {
        return (
            <Loader/>
        )
    };

    if(status === "rejected") {
        return (
            <NotFoundView/>
        )
    };

    if(status === "resolved") {
        return (
            <>
                {movie !== null && (
                    <>
                        <MovieInfoItem movie={movie} prevLocation={location}/>
                        <AdditionalInfo movieId={movieId} title="Additional Information" prevLocation={location}/>
                        <Outlet context={movieId} />
                    </>
                )}

            </>
        );
    }
};

export default MovieInfo;