import React, { useState } from "react";

export default function Registration(props) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleUserNameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Construct the registration data to send to the backend
        const registrationData = {
        username: username,
        email: email,
        password: password,
        };

        // Make an HTTP request to the backend API for registration
        fetch("http://127.0.0.1:8000/register/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationData),
        })
        .then((response) => response.json())
        .then((data) => {
            // Handle the response from the backend
            // For example, display a success message or redirect to the login page
            console.log(data);
        })
        .catch((error) => {
            // Handle any errors that occur during the registration process
            console.error("Error:", error);
        });
    };

    return (
        <div className="registration-container">
        <h1>Welcome to Exerlog</h1>
        <form id="registration-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                placeholder="Enter a username"
                required
                value={username}
                onChange={handleUserNameChange}
            />
            <label htmlFor="email">Email Address:</label>
            <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                required
                value={email}
                onChange={handleEmailChange}
            />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={handlePasswordChange}
            />
            <button type="submit" id="create-account-btn">
                Create Account
            </button>
            </form>
            <div className="login-link">
            Already have an account? <a href="/Login">Log in</a>
            </div>
        </div>
    );
}
