import styles from "./ReviewListItem.module.css";
import PropTypes from "prop-types";

const ReviewListItem = ({ review }) => {
    const { author, content } = review;
    return (
        <div className={styles.ReviewListItem}>
            <p className={styles.Author}>
                {author}    
            </p>

            <q className={styles.Review}>
                Author: {content}
            </q>
        </div>
    );
};

ReviewListItem.propTypes = {
    review: PropTypes.shape({
        author: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired        
    }) 
}

export default ReviewListItem;