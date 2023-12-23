import React, { useState } from 'react'
import "./App.css"
import { Link } from "react-router-dom";
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function Loginpage() {
    const [email, setEmail] = useState();
    const [password, setPass] = useState();
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/login", { email, password })
            .then(result => {
                console.log(result)
                if (result.data === "Success") {
                    navigate('/Overview');
                }
            })
            .catch(err => console.log(err))

    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div class="row">
                    <label for="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="email@example.com"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div class="row">
                    <label for="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={(e) => setPass(e.target.value)}

                    />
                </div>
                <button type="submit" className='formbtn'>Login</button>
            </form>
            <Link to="/Register" className='dirlink'>Don't have an account? Regsiter here</Link>
        </div>
    )
}

export default Loginpage
