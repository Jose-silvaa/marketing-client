"use client"

import { useState } from "react";
import "../login/login.css"

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
            <section className="box__login">
                <h2>Log in to your Account</h2>
                <p>Enter your email and password to acess your account</p>
            </section>
            <section className="section__login">
                    <form className="form__login" onSubmit={handleSubmit}>
                    <div>
                        <input type="text" id="email" name="email" value={loginData.email} onChange={handleChange} required placeholder="Email"></input>
                    </div>
                    <div>
                        <input type="password" id="password" name="password" value={loginData.password} onChange={handleChange} required placeholder="Password"></input>
                    </div>
                    <div>
                        <button type="submit">Log in</button>
                    </div>
                </form>
            </section>
        </div>
    )
}