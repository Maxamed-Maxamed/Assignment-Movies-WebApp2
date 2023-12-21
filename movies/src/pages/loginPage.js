import React, { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Link } from "react-router-dom";

const LoginPage = () => {
    const context = useContext(AuthContext);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    
    const login = () => {
        context.authenticate(userName, password);
    };
    
    const loginUser = async () => {
        const response = await login(userName, password);
        // Handle response, set context, or show an error message
        console.log(response); // Log the response for now
        // context.authenticate(userName, password);
    };

    let location = useLocation();
    const { from } = location.state ? { from: location.state.from.pathname } : { from: "/" };

    if (context.isAuthenticated === true) {
        return <Navigate to={from} />;
    }

    return (
        <center>
            <h2>Login page</h2>
            <p>You must log in to view the protected pages </p>
            <input
                id="username"
                placeholder="user name"
                onChange={e => setUserName(e.target.value)}
            ></input><br />
            <input
                id="password"
                type="password"
                placeholder="password"
                onChange={e => setPassword(e.target.value)}
            ></input><br />
            <button onClick={loginUser}>Log in</button>
            <p>
                Not Registered? <Link to="/signup">Sign Up!</Link>
            </p>
        </center>
    );
};

export default LoginPage;