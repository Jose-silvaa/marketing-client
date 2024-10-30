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

        console.log(loginData);

        setLoginData({email : "", password : ""})
    }

    return(
        <>
          <section>
            <h2>Welcome Back to FlowTarget</h2>
            <p>Enter your email and password to acess your account</p>
          </section>
          <section className="section__login">
                <form className="form__login" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" value={loginData.email} onChange={handleChange} required placeholder="Enter your email"></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={loginData.password} onChange={handleChange} required placeholder="Enter your password"></input>
                </div>
                <div>
                    <button type="submit">Sign In</button>
                 </div>
            </form>
         </section>
        </>
    )
}