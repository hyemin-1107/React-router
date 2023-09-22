import React from 'react';
import { Link } from 'react-router-dom';

function Home(props){
    return(
    <div>
        <h2>Home</h2>
        <p>Hello nice to meet you ! !</p>
        <Link to="/login"><button>Go to Sign in</button></Link>
    </div>
    );
};



export default Home;