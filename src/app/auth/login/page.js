"use client"

import { useState } from "react";
import "../../auth/auth.css"

export default function Login(){

    const [loginData, setLoginData] = useState({
        email : "",   
        password : ""
    })

    const handleChange = (e) =>{
        const { name,  value } = e.target;
        setLoginData({...loginData, [name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoginData({email : "", password : ""})
    }

    return(
        <div className="box">
            <div className="box-form">
                <h1>Log in to your Account</h1>
                <p>Enter your email and password to access your account</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email" value={loginData.email} onChange={handleChange} required placeholder="Email"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={loginData.password} onChange={handleChange} required placeholder="Password"></input>
                    </div>
                    <div>
                        <button type="submit">Log in</button>
                    </div>
                </form>
            </div>
        </div>
    )
}