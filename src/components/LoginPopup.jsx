import React, { useState } from 'react';
import './LoginPopup.css';
// import axios from 'axios';

const LoginPopup = ({ setShowLogin, setToken }) => {
    const [currState, setCurrState] = useState("Login");

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData(prevData => ({ ...prevData, [name]: value }));
    };

    const onLogin = async (event) => {
        event.preventDefault();
        console.warn({data});
        alert("Login Successfully");
        localStorage.setItem("token", "123456");
        setToken("123456");
        setShowLogin(false);
    };

    return (
        <div className='login-popup' >
            <form onSubmit={onLogin} className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <h1 onClick={() => setShowLogin(false)} >X</h1>
                </div>
                <div className="login-popup-inputs">
                    {currState === "Sign Up" && (
                        <input
                            type='text'
                            name='name'
                            onChange={onChangeHandler}
                            value={data.name}
                            placeholder='Your name'
                            required
                        />
                    )}
                    <input
                        name='email'
                        onChange={onChangeHandler}
                        value={data.email}
                        type='email'
                        placeholder='Your email'
                        required
                    />
                    <input
                        name='password'
                        onChange={onChangeHandler}
                        value={data.password}
                        type='password'
                        placeholder='Password'
                        required
                    />
                </div>
                <button className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md' type='submit'>
                    {currState === "Sign Up" ? "Create account" : "Login"}
                </button>

                <div className="login-popup-condition">
                    <input type='checkbox' required />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>

                {currState === "Login" ? (
                    <p >Create a new account? <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text' onClick={() => setCurrState("Sign Up")}>Click here</span></p>
                ) : (
                    <p>Already have an account? <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text' onClick={() => setCurrState("Login")}>Login here</span></p>
                )}
            </form>
        </div>
    );
};

export default LoginPopup;
