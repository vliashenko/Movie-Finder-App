import React from 'react';
import { NavLink } from "react-router-dom"
import styles from "./AdditionalInfo.module.css";
import PropTypes from "prop-types";

const AdditionalInfo = ({ movieId, title, prevLocation }) => {

    const active = (e) => {
        return e.isActive === true 
          ? styles.ActivatedLink 
          : styles.NavLink
      }

    return (
        <div className={styles.AdditionalInfo}>
            <hr />
            <h3>{title}</h3>

            <NavLink 
                to={`/movies/${movieId}/cast`}
                state={{ from: prevLocation?.state?.from }}
                className={active}
            >
                Cast
            </NavLink>

            <NavLink 
                to={`/movies/${movieId}/reviews`}
                state={{ from: prevLocation?.state?.from }}
                className={active}
            >
                Reviews
            </NavLink>

        </div>
    );
};

AdditionalInfo.propTypes = {
    movieId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    prevLocation: PropTypes.shape({
        state: PropTypes.shape({
            from: PropTypes.objectOf(PropTypes.string).isRequired
        }).isRequired
    }).isRequired
}
export default AdditionalInfo;