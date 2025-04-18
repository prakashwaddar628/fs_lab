"use client";

import { useState } from "react";

function LoginForm() {
    const [username, setUsername] = useState("");
    const [passwprd, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isAuth, setIsAuth] = useState(false);

    const validUser = {
        username : "admin",
        passwprd : "password"
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!username || !passwprd){
            setMessage("Both field are required.");
            setIsAuth(false);
            return;
        }

        if (username === validUser.username && passwprd === validUser.passwprd){
            setMessage("Login Successful");
            setIsAuth(true);
        }else{
            setMessage("Invalid username or password");
            setIsAuth(false)
        }
    }
  return (
    <div>
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="username"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            />

            <input type="password"
            placeholder="password"
            value={passwprd}
            onChange={(e)=>setPassword(e.target.value)}
            />

            <button type="submit">Login</button>
        </form>

        <p style={{color: isAuth ? "green":"red"}}>{message}</p>
    </div>
  )
}

export default LoginForm