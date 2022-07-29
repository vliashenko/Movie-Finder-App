import useFetchReviewsById from "hooks/useFetchReviewsById";
import Loader from "components/Loader/Loader";
import NotFoundView from "view/NotFoundView";
import styles from "./ReviewList.module.css"
import ReviewListItem from "components/ReviewListItem/ReviewListItem";
import PropTypes from "prop-types";

const ReviewList = () => {
    const {status, reviews } = useFetchReviewsById();

    if(status === "idle" || status === "pending") {
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
                <hr />
                <ul className={styles.ReviewList}>
                    {
                        reviews?.results?.length > 0
                        ?   reviews?.results?.map(review => (
                            <ReviewListItem key={review.id} review={review}/>
                        ))
                        : <h3>No reviews was left</h3>
                    }
                </ul>
            </>
        );
    }
};

ReviewList.propTypes = {
    reviews: PropTypes.arrayOf(PropTypes.shape({  
        id: PropTypes.number.isRequired
    }))
}

export default ReviewList;