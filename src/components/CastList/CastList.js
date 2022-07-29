import useFetchCastById from "hooks/useFetchCastById";
import Loader from "components/Loader/Loader";
import NotFoundView from "view/NotFoundView";
import CastItem from "components/CastItem/CastItem";
import styles from "./CastList.module.css";
import PropTypes from "prop-types";

const CastList = () => {
    const { cast, status } = useFetchCastById();


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
            <hr />
                <ul className={styles.CastList}>
                    {cast?.cast?.map((member) => (
                        <CastItem key={member.id} member={member}/>
                    ))}
                </ul>
            </>
        )
    };
};

CastList.propTypes = {
    member: PropTypes.shape({
        id: PropTypes.number.isRequired
    })
}

export default CastList;