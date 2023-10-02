import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate("/login");
    }

    return(
    <div>
        <h2>Home</h2>
        <p>Hello nice to meet you ! !</p>

        <button onClick={onClick}>
            Go to Sign in
        </button>
    </div>
    );
};



export default Home;