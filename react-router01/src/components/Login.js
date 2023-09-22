import React from 'react';
import { Link } from 'react-router-dom';

function Login(props) {
    return (
        <div>
            <h2>Sign in</h2>
            <div>
                <input type='text' placeholder='email or usename'></input>
                <input type='password' placeholder='password'></input>
            </div>
            <Link to="/logincheck"><button>Sign in</button></Link>
            <Link to="/join"><button>Sign up</button></Link>
        </div>
    )
};


export default Login;