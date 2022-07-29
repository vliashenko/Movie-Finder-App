import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundView = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(()=> {
            navigate("/", { replace: true })
        },2000)
    },[navigate])

    return (
        <h1 style={{ textAlign: "center" }}>
            404 Page not found
            <p>
                You will be automaticly redirected to the Home Page
            </p>
        </h1>
    );
};

export default NotFoundView;