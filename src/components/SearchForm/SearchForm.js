import styles from "./SearchForm.module.css"
import PropTypes from "prop-types";

const SearchForm = ({ query, onChange, onSubmit }) => {
    return (
        <form 
            className={styles.Form}
            onSubmit={onSubmit}
        >

            <input 
                className={styles.Input}
                onChange={onChange}
                value={query}
                type="text" 
            />

            <button
                type="button"
                className={styles.Button}
            >
                Search
            </button>

        </form>
    );
};

SearchForm.propTypes = {
    query: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default SearchForm;