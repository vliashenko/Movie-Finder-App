import { BASE_IMG } from "services/themoviedbAPI";
import castImage from "../../images/cast.jpg";
import styles from "./CastItem.module.css";
import PropTypes from "prop-types";

const CastItem = ({ member }) => {

    const { profile_path, original_name, character } = member;
    
    const image = profile_path === null ? castImage : `${BASE_IMG}${profile_path}`
      
    return (
        <div className={styles.Item}>
            <div className={styles.ContainerImg}>
                <img 
                    src={image} 
                    alt={original_name} 
                    className={styles.Img}
                />
            </div>

            <p className={styles.Name}>
                {original_name}
            </p>

            <p className={styles.Name}>
                {character}
            </p>
        </div>
    );
};

CastItem.propTypes = {
    member: PropTypes.shape({
        profile_path: PropTypes.string || null.isRequired,
        original_name: PropTypes.string.isRequired,
        character: PropTypes.string.isRequired
    })
}

export default CastItem;