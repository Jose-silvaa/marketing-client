"use client"

import { useState } from "react"
import "../../auth/auth.css"

export default function Register(){

    const [registerData, setRegisterData] = useState({
        name : "",
        email : "",
        country : "",
        password : ""
    })

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setRegisterData({...registerData, [name] : value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        console.log(registerData)
        setRegisterData({name: "", email : "", country : "", password : ""})
    }

    return (
        <section className="box">
            <div className="box-form">
                <h1>Create an account</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" onChange={handleChange} required placeholder="Name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" onChange={handleChange}  required placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="country">Country of residence</label>
                        <input type="text" id="country" name="country" onChange={handleChange}  required placeholder="Country"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" onChange={handleChange}  required placeholder="Password" />
                    </div>
                    <div>
                        <button type="submit">Log in</button>    
                    </div>
                </form>
            </div>
        </section>
    )
}