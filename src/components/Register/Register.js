import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id=""  placeholder="Your Email"/>
                    <br /><br />
                    <input type="password" name="" id="" placeholder="Your Password" />
                    <br /><br />
                    <input type="password" name="" id="" placeholder="Re-enter Your Password" />
                    <br /><br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link className="text-decoration-none" to="/login">Login</Link></p>
                <div>-----------Or------------</div>
                <button className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;