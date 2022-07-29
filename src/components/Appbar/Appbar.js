import { NavLink } from "react-router-dom"
import styles from "./Appbar.module.css";

const Appbar = () => {

    const active = (e) => {
      return e.isActive === true 
        ? styles.ActivatedLink 
        : styles.NavLink
    }
    
    return (
        <div className={styles.Appbar}>
            <div className={styles.Wrapper}>
                <NavLink 
                    to="/"
                    className={active}
                >
                    Home
                </NavLink>

                <NavLink 
                    to="/movies"
                    className={active}
                >
                    Movies
                </NavLink>
            </div>
        </div>
    );
};

export default Appbar;