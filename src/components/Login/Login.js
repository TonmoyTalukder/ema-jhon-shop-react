import React from 'react';
import './Login.css';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from ||'/';
    // console.log('came from', location.state?.from);

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
            // console.log(result.user);
        })
    }

    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name="" id=""  placeholder="Your Email"/>
                    <br /><br />
                    <input type="password" name="" id="" placeholder="Your Password" />
                    <br /><br />
                    <input type="submit" value="Submit" />
                </form>
                <p> <i>New to ema-jhon</i> ? <Link className="text-decoration-none" to="/register">Create Account</Link></p>
                <div>-----------Or------------</div>
                <button 
                    onClick={handleGoogleLogin}
                    className="btn-regular"
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;